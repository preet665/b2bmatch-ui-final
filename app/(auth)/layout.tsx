"use client";
import React from "react";
import "../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="google" content="notranslate"></meta>
        </head>
        <body className="">
          <div className="flex  justify-center items-center self-center">
            <main className="flex p-4  justify-center items-center self-center">
              {children}
            </main>
          </div>
        </body>
      </html>
    </>
  );
}
