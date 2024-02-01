"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
async function fetchHtmlContent() {
  const repoOwner = "preet665";
  const repoName = "b2b-match-ui-docs";
  const filePath = "help.html"; // Update with the actual path

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
export default function HelpPage() {
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
      <div className="bg-secondary p-10 pt-3 flex flex-col text-center justify-center h-screen overflow-auto">
        
        {/* <div className="bg-secondary flex justify-center  m-1 rounded-sm border-background mt-3 pt-0">
        <span className="text-5xl font-bold  pl-6">
          <h1 className="bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 inline-block text-transparent bg-clip-text">
            Help and Explanations
          </h1>
        </span>
          <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
            <h1 className="text-2xl font-bold mt-5 ">
              Architects, Canton of St. Gallen
            </h1>
            <CardTitle className="mt-5 text-xl">
              Semantic search (meaning)
            </CardTitle>
            <CardDescription className="text-[18px]">
              We are a school in St. Gallen and want to renovate a gymnasium.
              The project must be publicly advertised. We expect a construction
              volume of CHF 6 million. We are looking for private individuals or
              companies with enough staff and experience in public tenders to be
              able to realize this conversion or new building.
            </CardDescription>
          </Card>
          <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
            <CardTitle className="mt-5 text-xl">
              Keyword search results
            </CardTitle>
            <CardDescription className="text-[18px]">
              Keyword search results In a keyword search, the terms must be at
              least partially present. An office community with twenty
              successful projects that have their offices 50 meters from the
              cantonal border cannot be found. Keyword searching is what is
              still done today with conventional databases. It's cheap, fast but
              not very accurate.
            </CardDescription>
            <CardTitle className="mt-5 text-xl">
              Semantic search results
            </CardTitle>
            <CardDescription className="text-[18px]">
              In a semantic search, the search query is formulated in a natural
              way. The artificial intelligence “understands” the query and
              provides much more accurate results than a keyword search.
            </CardDescription>
            <h1>
              <b>
                “Like chatGPT, we can ask normal questions and get reasonable
                answers.” (Dr. Patrik Zwahlen).
              </b>
            </h1>
          </Card>
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

        <Footer />
      </div>
    </>
  );
}
