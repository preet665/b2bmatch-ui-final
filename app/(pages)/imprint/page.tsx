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
  const filePath = "imprint.html"; // Update with the actual path

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
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <Footer />
      </div>
    </>
  );
}
