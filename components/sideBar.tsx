"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col  gap-1  w-80  max-h-screen bg-background">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col justify-center items-center text-center">
            {/* <img
              src="./logo.jpeg"
              alt="raj"
              width={"200px"}
              className="m-3 mix-blend-color-burn"
            /> */}
            
            <h1 className="text-3xl font-bold mt-3 bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 text-transparent bg-clip-text">
              B2bMatch
            </h1>
            <h1 className="text-xl font-bold mt-3 bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 text-transparent bg-clip-text">
              Welcome Username
            </h1>
            <h1 className="text-xl font-bold  bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 text-transparent bg-clip-text">
              (show only if logged)
            </h1>
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
        <div className="flex-1 h-full">
          <ul className="text-xl ">
            <li className="rounded-xl flex flex-col items-center justify-center "></li>
          </ul>
          {/* <ul className="relative h-1/3 rounded-lg  overflow-x-hidden overflow-y-scroll no-scrollbar border-2 border-secondary">
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b	">
              {" "}
              1.how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              2.how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
          </ul> */}
          <ul className=" pb-2 text-xl pl-2 pr-5">
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3 ">
              <Link href="/" className="flex items-center space-x-3 rounded-md">
                <span>Search</span>
              </Link>
            </li>
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3">
              <Link
                href="price"
                className="flex items-center  space-x-3 rounded-md"
              >
                <span>Prices </span>
              </Link>
            </li>
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3">
              <Link
                href="/library"
                className="flex items-center  space-x-3 rounded-md"
              >
                <span>Library</span>
              </Link>
            </li>
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3">
              <Link
                href="help"
                className="flex items-center  space-x-3 rounded-md"
              >
                <span>Help </span>
              </Link>
            </li>
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3">
              <Link
                href="/login"
                className="flex items-center  space-x-3 rounded-md"
              >
                <span>Register</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col text-center justify-center">
            <span className="text-xl ">INFORMATION</span>
            <p className="text-left p-5 pb-0">
              We combine our database with chatGPT with the aim of finding
              “comparable companies”. You can find some examples under “Help”.
            </p>
            <p className="text-left p-5 pt-1">
              The database is already working and we can deliver. This site
              should be ready by March 2024. If you already have an inquiry
              today, please contact us. : 044 380 78 88
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
