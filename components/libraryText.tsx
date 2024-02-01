import React from "react";
import { Button } from "./ui/button";

interface LibraryTextProps {
  content: string;
}

const LibraryText: React.FC<LibraryTextProps> = ({ content }) => {
  return (
    <div>
      <div className="flex flex-row m-2 w-full">
        <p className="p-2 border-primary text-secondary-foreground bg-card hover:bg-secondary rounded-xl text-lg w-11/12 border-[1px] hover:border-ring outline-none transition-all duration-500">
          {content}
        </p>
        <div className="m-2">
          <Button
            variant={"outline"}
            className="bg-primary text-secondary text-sm h-7 border-white border mb-2"
          >
            Active
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LibraryText;
