"use client";
import Footer from "@/components/footer";
import LibraryText from "@/components/libraryText";
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

interface Prompt {
  pro_hist_id: number;
  prompt_string: string; // Add the prompt_string property here
}
export default function Library() {

  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const listPrompts = async () => {
    try {
      const apiUrl = `${API_BASE_URL}/library/list_prompts?user_id=1`;

      const response = await fetch(apiUrl, {
        method: "GET",
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setPrompts(responseData.prompts);



    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const reactivatePrompt = async (pro_hist_id: number) => {
    try {
      const apiUrl = `${API_BASE_URL}/library/reactivate_prompt/${pro_hist_id}`;

      const response = await fetch(apiUrl, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      toast.success(`${responseData.message} `, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      listPrompts();
      setTimeout(() => { handleOpenNewTab() }, 3000);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleOpenNewTab = () => {
    // Specify the URL you want to open in the new tab
    const url = '/';

    // Open the URL in a new tab
    window.open(url, '_blank');
  };


  const deletePrompt = async (pro_hist_id: number) => {
    try {
      const apiUrl = `${API_BASE_URL}/library/delete_prompt/${pro_hist_id}`;

      const response = await fetch(apiUrl, {
        method: "POST",
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      toast.success(`${responseData.message} `, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      listPrompts();
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    listPrompts();
  }, []);

  return (
    <div className="flex flex-col bg-secondary pt-10">
      <h2 className="text-xl mt-1 ml-10 ">
        Aktivieren oder löschen Sie Ihren gespeicherten Suchanfragen über die
        Schaltfläche.
      </h2>
      <h2 className="text-xl mt-1 ml-10 ">
        Die Suchanfrage wird entweder gelöscht oder auf der Hauptseite eingefügt
        und dargestellt.
      </h2>
      <div className="relative  w-11/12 h-[800px] top-20 overflow-scroll max-h-min no-scrollbar ">
        <div className="flex flex-col justify-center items-center ml-2 border-x-2  p-2  rounded-xl">
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
