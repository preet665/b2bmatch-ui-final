import * as React from "react";
import Footer from "@/components/footer";

async function fetchHtmlContent() {
 const repoOwner = "preet665";
 const repoName = "b2b-match-ui-docs";
 const filePath = "data.html"; // Update with the actual path
 const token = process.env.GIT_ACCESS_TOKEN;
 const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

 console.log("Fetching HTML content from:", apiUrl); // Debugging statement

 try {
    const response = await fetch(apiUrl, { headers: { Authorization: `Bearer ${token}`, } });
    console.log("Response status:", response.status); // Debugging statement
    const data = await response.json();

    // Use the 'content' property directly for HTML content
    const base64Content = data.content;

    // Decode base64 content
    const htmlContent = new TextDecoder('utf-8').decode(Buffer.from(data.content, 'base64'));
    console.log("Decoded HTML content:", htmlContent); // Debugging statement

    return htmlContent;
 } catch (error) {
    console.error("Error fetching HTML content:", error); // Debugging statement
    return null;
 }
}

export default async function data() {
 try {
    const html = await fetchHtmlContent();
    console.log("HTML content:", html); // Debugging statement

    return (
      <>
        <div className="bg-secondary flex flex-col text-center justify-center">
          <div className={`w-full max-h-screen overflow-auto bg-secondary `}>
            <div dangerouslySetInnerHTML={{ __html: html || <h1>Loading...</h1> }} className="bg-secondary" />
            <Footer />
          </div>
        </div>
      </>
    );
 } catch (error) {
    console.error("Error rendering data component:", error); // Debugging statement
    return <div>Error loading content</div>;
 }
}
