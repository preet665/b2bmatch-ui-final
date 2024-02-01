"use client";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./ui/theme-provider";
import { useTheme } from "next-themes";
import PromptText from "./promptText";
import TextCard from "@/components/promptCard";
import React, { useRef } from "react";
import PromptRes from "@/components/promptRes";
import PromptGraph from "@/components/promptGraph";
import Sidebar from "@/components/sideBar";
import Footer from "@/components/footer";
export default function Main() {
  return (
    <>
      <div
        className={cn(
          "flex w-full font-sans antialiased bg-secondary text-foreground text-xl overflow-hidden"
        )}
      >
        <div className="overflow-y-scroll overflow-x-hidden relative max-h-lvh ">
          <div className="w-11/12  rounded-lg flex flex-col p-4">
            <PromptText />
            <TextCard
              title="Title"
              description=""
              buttonText="Learn More"
              buttonLink="#"
              customMessage="This is a  message for Title.This is a  message for Title"
            />
            <PromptRes />
            <PromptGraph />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
