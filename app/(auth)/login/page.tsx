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
    <div className="flex flex-col  h-screen justify-center items-center self-center bg-[#9eb67c]">
      <div className=" flex  flex-col mt-20  box-border shadow-primary shadow-xl border-2  w-fit p-10 rounded-xl bg-secondary">
        <div className="flex w-fit items-center justify-center self-center text-center  p-5 pb-10 ">
        </div>
        <Tabs
          defaultValue="account"
          className="w-[600px] shadow-none bg-secondary"
        >
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="account">Anmelden</TabsTrigger>
            <TabsTrigger value="password">Melden Sie sich an</TabsTrigger>
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
