"use client";
import Footer from "@/components/footer";
import LibraryText from "@/components/libraryText";
import React, { useEffect, useState } from "react";
interface Prompt {
  pro_hist_id: number;
  prompt_string: string; // Add the prompt_string property here
  // Add other properties of the Prompt type here
}
export default function Library() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const listPrompts = async () => {
      try {
        const apiUrl = `${API_BASE_URL}/library/list_prompts`;

        const response = await fetch(apiUrl, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setPrompts(responseData.prompts);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    listPrompts();
  }, []); //
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
            <LibraryText key={prompt.pro_hist_id} prompt={prompt} />
          ))}
        </div>
      </div>
      <div className="relative mt-5 float-end top-16 rounded-lg ">
        <Footer />
      </div>
    </div>
  );
}
