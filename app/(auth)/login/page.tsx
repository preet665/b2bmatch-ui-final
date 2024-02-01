"use client";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function login() {
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col ">
      <div className="flex w-fit items-center justify-center self-center text-center ">
        <img src="./logo.jpeg" className="w-1/4 mix-blend-color-burn " alt="" />
      </div>
      <div className="bg-secondary flex   justify-center items-center self-center box-border mt-32 border-2  w-fit p-10 rounded-xl">
        <Tabs defaultValue="account" className="w-[600px] bg-secondary">
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="account">Signin</TabsTrigger>
            <TabsTrigger value="password">Signup</TabsTrigger>
            <div className="m-5"></div>
          </TabsList>
          <TabsContent value="account">
            <LoginForm />
          </TabsContent>
          <TabsContent value="password">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
