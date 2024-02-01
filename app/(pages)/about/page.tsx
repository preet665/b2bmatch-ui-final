"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";

async function fetchHtmlContent() {
  const repoOwner = "preet665";
  const repoName = "b2b-match-ui-docs";
  const filePath = "aboutus.html"; // Update with the actual path

  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Use the 'content' property directly for HTML content
    const base64Content = data.content;

    // Decode base64 content
    const htmlContent = atob(base64Content);

    return htmlContent;
  } catch (error) {
    console.error("Error fetching HTML content:", error);
    return null;
  }
}

export default function Home() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Call the fetchHtmlContent function when the component is mounted
    const fetchData = async () => {
      const content = await fetchHtmlContent();
      if (content) {
        console.log("HTML Content:", content);
        setHtmlContent(content);
        // Update your component state or do something with the HTML content
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="bg-secondary flex flex-col text-center justify-center h-screen overflow-auto ">
        {/* <span className="text-5xl mt-5 font-bold  pl-6">
          <h1 className="bg-gradient-to-r from-green-600 to-green-950 inline-block text-transparent bg-clip-text">
            About Us
          </h1>
        </span>
        <div className="bg-secondary flex justify-center items-center m-3 rounded-sm border-background mt-3 pt-0">
          <Card className="flex w-2/4 m-5 p-10 items-center text-center justify-center flex-col shadow-none bg-secondary border-none">
            <img src="./about.jpg" alt="" className="rounded-full" />
            <h1 className="text-2xl font-bold mt-5 ">
              We want to make a positive contribution to ensuring that
              artificial intelligence is used correctly.
            </h1>
          </Card>
          <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
            <CardTitle className="mt-5 text-xl">Authorship</CardTitle>
            <CardDescription className="text-[20px]">
              B2Bmatch.ch is a service provided by: BildKom International GmbH,
              Zurich
            </CardDescription>
            <CardTitle className="mt-5 text-xl">Management</CardTitle>
            <CardDescription className="text-[20px]">
              Dr. Patrik Zwahlen
            </CardDescription>
            <CardTitle className="mt-5 text-xl">
              We would be happy to help you with your search.
            </CardTitle>
            <CardDescription className="text-[20px]">
              Our databases work and we can deliver. Creating the prompts is
              challenging. That's why we're taking care of it personally at the
              moment. We should be ready by the beginning of 2024 so that you
              can search independently and without our help.
            </CardDescription>
          </Card>
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <Footer />
      </div>
    </>
  );
}
