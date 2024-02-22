"use client"
import * as React from "react";
import {
  Card,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import Footer from "@/components/footer";

async function fetchHtmlContent() {
  const repoOwner = "preet665";
  const repoName = "b2b-match-ui-docs";
  const filePath = "data.html"; // Update with the actual path

  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Use the 'content' property directly for HTML content
    const base64Content = data.content;

    // Decode base64 content
    const htmlContent = new TextDecoder('utf-8').decode(Buffer.from(data.content, 'base64'));

    return htmlContent;
  } catch (error) {
    console.error("Error fetching HTML content:", error);
    return null;
  }
}

export default function GTC() {
  const [htmlContent, setHtmlContent] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const content = await fetchHtmlContent();
        if (content) {
          console.log("HTML Content:", content);
          setHtmlContent(content);
        }
      } catch (error) {
        console.error("Error fetching HTML content:", error);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-secondary flex flex-col text-center justify-center">
        <div className={`w-full max-h-screen overflow-auto bg-secondary ${loading ? 'opacity-50' : ''}`}>

          {loading ? (
            // Loading animation
            <div className=" h-screen flex items-center justify-center ">
              <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-primary">
                <div className="absolute z-10 -ml-2 h-8 w-12 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16">
                    <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
                  </svg>
                </div>
                <div className="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200" ></div>
                <div className="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200" ></div>
                {/* <h1 className="m-0 ml-20 text-3xl font-bold">Loading....</h1> */}
              </div>
            </div>
          ) : (
            // Render the HTML content
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="bg-secondary" />
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}
