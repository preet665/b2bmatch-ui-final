import Footer from "@/components/footer";
async function fetchHtmlContent() {
  const repoOwner = "preet665";
  const repoName = "b2b-match-ui-docs";
  const filePath = "help.html";
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const base64Content = data.content;
    const htmlContent = new TextDecoder('utf-8').decode(Buffer.from(data.content, 'base64'));
    return htmlContent;
  } catch (error) {
    console.error("Error fetching HTML content:", error);
    return null;
  }
}
export default async function HelpPage() {
  const html = await fetchHtmlContent();
  return (
    <>
      <div className="bg-secondary flex flex-col text-center justify-center h-screen overflow-hidden">
        <div className="w-full  h-screen overflow-auto ">
          <div dangerouslySetInnerHTML={{ __html: html || <h1>Loading...</h1> }} />
        </div>
        <Footer />
      </div>
    </>
  );
}
