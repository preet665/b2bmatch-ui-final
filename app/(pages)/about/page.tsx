import * as React from "react";
import Footer from "@/components/footer";

async function fetchHtmlContent() {
 const token = process.env.GIT_ACCESS_TOKEN;
 const repoOwner = "preet665";
 const repoName = "b2b-match-ui-docs";
 const filePath = "aboutus.html"; // Update with the actual path

 const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

 console.log("Fetching HTML content from:", apiUrl); // Debugging statement

 try {
    const response = await fetch(apiUrl, { headers: { Authorization: `Bearer ${token}`, } });
    console.log("Response status:", response.status); // Debugging statement
    const data = await response.json();

    if (data.content && data.encoding === "base64") {
      const htmlContent = new TextDecoder('utf-8').decode(Buffer.from(data.content, 'base64'));
      console.log("Fetched HTML content"); // Debugging statement
      return htmlContent;
    } else {
      console.error("Invalid response format:", data);
      return null;
    }
 } catch (error) {
    console.error("Error fetching HTML content:", error);
    return null;
 }
}

export default async function Home() {
 try {
    const html = await fetchHtmlContent();
    console.log("HTML content fetched"); // Debugging statement
    return (
      <>
        <div className="bg-secondary flex flex-col text-center justify-center h-screen overflow-hidden">
          <div className="w-fit h-[900px] overflow-auto ">
            <div dangerouslySetInnerHTML={{ __html: html || <h1>Loading...</h1> }} />
          </div>
          <Footer />
        </div>
      </>
    );
 } catch (error) {
    console.error("Error rendering Home component:", error);
    return <div>Error loading content</div>;
 }
}
