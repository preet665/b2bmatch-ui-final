import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";
interface TextCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  customMessage: string;
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  customMessage,
}) => {
  return (
    <div className="pt-1 pb-1 drop-shadow-lg  w-full ">
      <div className=" flex rounded-lg h-fit bg-response p-3 flex-col border-bor border-2 text-foreground ">
        <h2 className="text-foreground  text-lg font-medium">Tips</h2>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-foreground ">
            {customMessage} {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
