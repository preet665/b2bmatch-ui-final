// app/pages/contact/page.tsx
"use client";
import * as React from "react";
import Footer from "@/components/footer";
import { toast } from "react-toastify";
import axios from 'axios';

function submitContactMessage(messageData:any) {
 const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/contact`;

 console.log("Submitting contact message to:", apiUrl); // Debugging statement
 console.log("Message data:", messageData); // Debugging statement

 return axios.post(apiUrl, messageData)
    .then(response => {
      console.log("Response status:", response.status); // Debugging statement
      console.log("Response data:", JSON.stringify(response.data)); // Debugging statement

      // Show a success toast notification
      toast.success("Message sent successfully!");
    })
    .catch(error => {
      console.error("Error submitting contact message:", error); // Debugging statement

      // Show an error toast notification
      toast.error("Failed to send message. Please try again.");
    });
}

export default function Imprint() {
 const [name, setName] = React.useState("");
 const [email, setEmail] = React.useState("");
 const [message, setMessage] = React.useState("");

 const handleSubmit = () => {
    const messageData = {
      name_string: name,
      email_string: email,
      message_string: message,
    };

    console.log("Submitting message data:", messageData); // Debugging statement
    submitContactMessage(messageData);
 };

 // Log state changes for debugging
 React.useEffect(() => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
 }, [name, email, message]);

 return (
    <div className="bg-secondary p-10 pt-3 flex flex-col text-center justify-center h-screen overflow-auto text-foreground">
        <div className="randome bg-secondary flex flex-col justify-center items-center m-3 rounded-sm border-background mt-3 pt-0">
          <span className="text-5xl mt-5 font-bold pl-6">
            <h1 className="bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 inline-block text-transparent bg-clip-text">
              Kontakt
            </h1>
          </span>
          <div className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none text-foreground ">
            <p className="text-xl">
              Wenn Sie Fragen haben oder Hilfe benötigen, dann senden Sie uns Ihre Frage zu. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.
            </p>
            <h2 className="text-lg contactus pt-2 pb-2">Ihr Name</h2>
            <input type="text" className="bg-white rounded-md " onChange={(e) => setName(e.target.value)} />
            <h2 className="text-lg contactus pt-2 pb-2">Ihre E-Mail</h2>
            <input type="text" className="bg-white rounded-md " onChange={(e) => setEmail(e.target.value)} />
            <h2 className="text-lg contactus pt-2 pb-2">Ihre Anfrage</h2>
            <textarea className="bg-white mb-5 rounded-md " rows={5} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className="text-foreground bg-primary p-3 rounded-md cursor-pointer hover:bg-popover border-2 border-black" onClick={handleSubmit}>
              Senden
            </button>
          </div>
        </div>
        <Footer />
      </div>
 );
}
