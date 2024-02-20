import React, { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import "../app/globals.css";

const PromptText = () => {
  const submitButtonRef = useRef(null);
  const [promptText, setPromptText] = useState("");
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleKeyDown = (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      submitButtonRef.current.click();
    }
  };

  const handleSave = async () => {
    try {
      // Replace 'YOUR_API_URL' with your actual API endpoint
      const apiUrl = `${API_BASE_URL}/library/store_prompt`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "1", // Replace with the actual user ID
          prompt_string: promptText,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle successful API response
      const responseData = await response.json();
      console.log("API Response:", responseData);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <>
      <div className="flex w-full items-center mb-2">
        <Textarea
          placeholder="Geben Sie hier Ihre Suchanfrage ein. Mit den `Tipps` können Sie Ihre Suche verfeinern. Im nächsten Feld erhalten Sie eine Zusammenfassung der gefundenen Unternehmen. Schauen Sie sich die Grafik an und spielen Sie damit. Bewegen Sie die Maus langsam über die Felder. Sie können auch auf die Felder klicken, um tiefer einzutauchen und mehr Details zu erfahren."
          rows={3}
          className="pl-4 text-secondary-foreground bg-card border-2 hover:bg-secondary rounded-xl text-lg w-full mt-2 border-bor focus:outline-none"
          onKeyDown={handleKeyDown}
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />
        <div className="flex flex-col m-2 w-24">
          <Button
            variant={"outline"}
            className="bg-primary text-secondary text-sm h-7 border-white border "
            onClick={handleSave}
          >
            Speichern
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border"
          >
            Neu
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border "
            ref={submitButtonRef}
           
          >
            Senden
          </Button>
        </div>
      </div>
    </>
  );
};

export default PromptText;
