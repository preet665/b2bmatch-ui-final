import React, { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import "../app/globals.css";
import { toast } from "react-toastify";

const PromptText = () => {
  const submitButtonRef = useRef((null as unknown) as HTMLButtonElement); ;
  const [promptText, setPromptText] = useState("");
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      submitButtonRef.current.click();
    }
  };

  const handleNew = () => {
    window.location.reload();
  };

  const handleSave = async () => {
    try {
      const apiUrl = `${API_BASE_URL}/library/store_prompt`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Authorization': `${process.env.JWT_TOKEN}`,
        },
        body: JSON.stringify({
          user_id: "1",
          prompt_string: promptText,
        }),
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
      console.log("API Response:", responseData);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const isPromptTextEmpty = promptText.trim() === "";

  return (
    <>
      <div className="flex w-full items-center mb-2">
        <Textarea
          placeholder="Geben Sie hier Ihre Suchanfrage ein. Mit den `Tipps` können Sie Ihre Suche verfeinern. Im nächsten Feld erhalten Sie eine Zusammenfassung der gefundenen Unternehmen. Schauen Sie sich die Grafik an und spielen Sie damit. Bewegen Sie die Maus langsam über die Felder. Sie können auch auf die Felder klicken, um tiefer einzutauchen und mehr Details zu erfahren."
          rows={3}
          className="pl-4 text-secondary-foreground bg-white border-2  rounded-xl text-lg w-full mt-2 border-bor focus:outline-none"
          onKeyDown={handleKeyDown}
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />
        <div className="flex flex-col m-2 w-24">
          <Button
            variant={"outline"}
            className={`bg-primary text-secondary text-sm h-7 border-white border ${isPromptTextEmpty && "opacity-50 cursor-not-allowed"
              }`}
            onClick={handleSave}
            disabled={isPromptTextEmpty}
          >
            Speichern
          </Button>
          <Button
            variant={"outline"}
            className={`bg-primary text-secondary h-7 border-white border ${isPromptTextEmpty && "opacity-50 cursor-not-allowed"
              }`}
            onClick={handleNew}
            disabled={isPromptTextEmpty}
          >
            Neu
          </Button>
          <Button
            variant={"outline"}
            className={`bg-primary text-secondary h-7 border-white border ${isPromptTextEmpty && "opacity-50 cursor-not-allowed"
              }`}
            ref={submitButtonRef}
            disabled={isPromptTextEmpty}
          >
            Senden
          </Button>
        </div>
      </div>
    </>
  );
};

export default PromptText;
