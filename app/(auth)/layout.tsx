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
          <meta />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
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
