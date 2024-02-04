import React, { useRef } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import "../app/globals.css";

const PromptText = () => {
  const submitButtonRef = useRef(null);

  const handleKeyDown = (event: { keyCode: number; }) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
      // Trigger the click event of the Submit button
      submitButtonRef.current.click();
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
        />
        <div className="flex flex-col m-2 w-24">
          <Button
            variant={"outline"}
            className="bg-primary text-secondary text-sm h-7 border-white border "
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
            onClick={() => {
              // Handle the submit logic here
              console.log("Submit button clicked");
            }}
          >
            Senden
          </Button>
        </div>
      </div>
    </>
  );
};

export default PromptText;
