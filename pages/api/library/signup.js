// pages/api/signup.js
import { hash } from 'bcryptjs'; // For password hashing

const users = [
  { id: 1, email: 'idealistraj09@gmail.com', passwordHash: '.' },
  // Add more users as needed
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  // Check if the user already exists
  const userExists = users.some((u) => u.email === email);

  if (userExists) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  // Hash the password before storing it
  const passwordHash = await hash(password, 10);

  // Create a new user
  const newUser = { id: users.length + 1, email, passwordHash };
  users.push(newUser);

  // Registration successful
  return res.status(201).json({ message: 'Registration successful', user: { id: newUser.id, email: newUser.email } });
}
