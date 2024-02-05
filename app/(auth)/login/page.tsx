"use client";
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function Login() {
  const [activeTab, setActiveTab] = useState("account");

  const switchToSignupTab = () => {
    setActiveTab("password");
  };

  const switchToLoginTab = () => {
    setActiveTab("account");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center self-center bg-[#9eb67c]">
      <div className="flex flex-col mt-10 box-border shadow-primary shadow-xl border-2 w-fit p-10 rounded-xl bg-secondary">
        <div className="grid w-[500px] grid-cols-2">
          <button
            className={`p-3 font-bold rounded-lg ${
              activeTab === "account" ? "bg-primary text-secondary" : ""
            }`}
            onClick={() => setActiveTab("account")}
          >
            Anmelden
          </button>
          <button
            className={`p-3 font-bold rounded-lg ${
              activeTab === "password" ? "bg-primary text-secondary" : ""
            }`}
            onClick={() => setActiveTab("password")}
          >
            Melden Sie sich an
          </button>
        </div>
        {activeTab === "account" ? (
          <LoginForm switchToSignupTab={switchToSignupTab} />
        ) : (
          <SignupForm switchToLoginTab={switchToLoginTab} />
        )}
      </div>
    </div>
  );
}
