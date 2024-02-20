// pages/api/login.js
import { compare } from "bcryptjs"; // For password comparison

const email1 = "idealistraj09@gmail.com";
const passwordHash = ".";
const id = 1;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (email1 !== email) {
    return res.status(401).send({ message: "Invalid credentials" });
  }

  if (passwordHash !== password) {
    return res.status(401).send({ message: "Invalid credentials" });
  }

  // Authentication successful
  return res.status(200).send({
    message: "Login successful",
    user: {  email: email1 },
  });
}
