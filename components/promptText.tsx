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
          placeholder="Type your message here and hit enter to submit."
          rows={2}
          className="pl-4 text-secondary-foreground bg-card hover:bg-secondary rounded-xl text-lg w-full mt-2 border-[1px] hover:border-ring outline-none transition-all duration-500"
          onKeyDown={handleKeyDown}
        />
        <div className="flex flex-col m-2 w-24">
          <Button
            variant={"outline"}
            className="bg-primary text-secondary text-sm h-7 border-white border "
          >
            Save
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border"
          >
            New
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border hidden"
            ref={submitButtonRef}
            onClick={() => {
              // Handle the submit logic here
              console.log("Submit button clicked");
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default PromptText;
