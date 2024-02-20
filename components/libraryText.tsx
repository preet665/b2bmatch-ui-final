import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface Prompt {
  pro_hist_id: number;
  prompt_string: string;
}

interface LibraryTextProps {
  prompt: Prompt;
}

const LibraryText: React.FC<LibraryTextProps> = ({ prompt }) => {
  // Add your activation and deletion logic here

  return (
    <div>
      <div className="flex flex-row m-2 w-full">
        <p className="p-2 border-primary text-secondary-foreground bg-card hover:bg-secondary rounded-xl text-lg w-11/12 border-[1px] hover:border-ring outline-none transition-all duration-500">
          {prompt.prompt_string}
        </p>
        <div className="m-2">
          <Button
            variant={"outline"}
            className="bg-primary text-secondary text-sm h-7 border-white border mb-2"
          >
            Aktivieren
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border"
          >
            Löschen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LibraryText;
