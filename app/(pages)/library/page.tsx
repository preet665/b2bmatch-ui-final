"use client";
import Footer from "@/components/footer";
import LibraryText from "@/components/libraryText";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface Prompt {
 pro_hist_id: number;
 prompt_string: string;
}

export default function Library() {
 const { data: session } = useSession();
 const router = useRouter();
 const [prompts, setPrompts] = useState<Prompt[]>([]);
 const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

 if (!session) {
    router.replace(`/login`);
    return null;
 }

 const headersList = {
    "Authorization": `Bearer ${session.access_token}`,
    "Content-Type": "application/json"
 };

 const listPrompts = async () => {
    const apiUrl = `${API_BASE_URL}/library/list_prompts?user_id=1`;
    console.log("Fetching prompts from:", apiUrl); // Debugging statement

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: headersList,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Fetched prompts:", responseData.prompts); // Debugging statement
      setPrompts(responseData.prompts);
    } catch (error) {
      console.error("API Error in listPrompts:", error); // Debugging statement
    }
 };

 const reactivatePrompt = async (pro_hist_id: number) => {
    const apiUrl = `${API_BASE_URL}/library/reactivate_prompt/${pro_hist_id}`;
    console.log("Reactivating prompt:", apiUrl); // Debugging statement

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: headersList,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Reactivated prompt response:", responseData); // Debugging statement
      toast.success(`${responseData.message} `);

      listPrompts();
      setTimeout(() => { handleOpenNewTab() }, 3000);
    } catch (error) {
      console.error("API Error in reactivatePrompt:", error); // Debugging statement
    }
 };

 const deletePrompt = async (pro_hist_id: number) => {
    const apiUrl = `${API_BASE_URL}/library/delete_prompt/${pro_hist_id}`;
    console.log("Deleting prompt:", apiUrl); // Debugging statement

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headersList,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Deleted prompt response:", responseData); // Debugging statement
      toast.success(`${responseData.message} `);

      listPrompts();
    } catch (error) {
      console.error("API Error in deletePrompt:", error); // Debugging statement
    }
 };

 const handleOpenNewTab = () => {
    const url = '/';
    window.open(url, '_blank');
 };

 useEffect(() => {
    listPrompts();
 }, []);

 return (
    <div className="flex flex-col bg-secondary pt-10">
      {session && <h1 className="text-3xl text-center">Gespeicherte Suchanfragen</h1>}
      {session.user && <h2 className="text-xl text-center">Willkommen, {session.user.name}!</h2>}
      <div className="pl-14">
        <h2 className="text-xl p-2">
          Aktivieren oder löschen Sie Ihren gespeicherten Suchanfragen über die
          Schaltfläche.
        </h2>
        <h2 className="text-xl p-2">
          Die Suchanfrage wird entweder gelöscht oder auf der Hauptseite eingefügt
          und dargestellt.
        </h2>
      </div>
      <div className="relative w-11/12 h-screen right-2 overflow-scroll max-h-min no-scrollbar pb-60 border-y-2 ">
        <div className="flex flex-col justify-center items-center ml-2 border-x-2 rounded-xl ">
          {prompts.map((prompt) => (
            <LibraryText
              key={prompt.pro_hist_id}
              prompt={prompt}
              onReactivateClick={reactivatePrompt}
              onDeleteClick={deletePrompt}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-5 float-end top-16 rounded-lg ">
        <Footer />
      </div>
    </div>
 );
}
