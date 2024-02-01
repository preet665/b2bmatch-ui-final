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
    const htmlContent = atob(base64Content);

    return htmlContent;
  } catch (error) {
    console.error("Error fetching HTML content:", error);
    return null;
  }
}
export default function GTC() {
  const [htmlContent, setHtmlContent] = React.useState("");

  React.useEffect(() => {
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
      <div className="bg-secondary flex flex-col text-center justify-center">
        <div className="w-fit max-h-screen overflow-auto bg-secondary">
          {/* <div className="bg-secondary flex flex-col flex-grow justify-center rounded-sm border-background mt-1 pt-0">
            <span className="text-5xl mt-5 font-bold pl-6">
              <h1 className="bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 inline-block text-transparent bg-clip-text mt-3">
                Data Protection
              </h1>
            </span>
            <div className="flex ">
              <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
                <CardTitle className="mt-5 text-xl">Data Protection</CardTitle>
                <CardDescription className="text-[18px]">
                  We, BildKom International GmbH, take the protection of your
                  personal data very seriously and adhere to the rules of data
                  protection laws. In this privacy policy, we inform you about
                  what data we collect from you, how we use this data, and what
                  rights you have in relation to your data.
                </CardDescription>
                <CardTitle className="mt-5 text-xl">
                  1. Collection and processing of personal data
                </CardTitle>
                <CardDescription className="text-[18px]">
                  Personal data is any information that relates to an identified
                  or identifiable natural person. We collect and process
                  personal data from you when you visit our website or use our
                  services. The type and extent of data collected depend on how
                  you use our website and which services you order from us.
                </CardDescription>
                <CardDescription className="text-[18px]">
                  When you visit our website, we temporarily store the following
                  data in a log file:
                </CardDescription>
                <ul className="list-disc list-inside m-3 text-[18px]">
                  <li>Your IP address</li>
                  <li>Date and time of your visit</li>
                  <li>The page or file you accessed</li>
                  <li>The browser and operating system used</li>
                  <li>The website from which you came to us</li>
                </ul>
                <CardDescription className="text-[18px]">
                  This data is collected for technical reasons to ensure the
                  functionality and security of our website. We do not use this
                  data to draw conclusions about you personally. The data will
                  be deleted after seven days at the latest.
                </CardDescription>
                <CardDescription className="text-[18px]">
                  If you would like to order addresses from us, you must provide
                  us with the following information:
                </CardDescription>
                <ul className="list-disc list-inside m-3 text-[18px]">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li> Your billing address</li>
                  <li>The desired addresses</li>
                </ul>
                <CardDescription className="text-[18px]">
                  We use this data exclusively to process your order. We store
                  this data for as long as necessary to fulfill our contractual
                  and legal obligations. The data is then deleted or anonymized.
                </CardDescription>
                <CardTitle className="mt-5 text-xl">
                  2. Disclosure of personal data to third parties
                </CardTitle>
                <CardDescription className="text-[18px]">
                  We will not pass on your personal data to third parties unless
                  you have given us your express consent to do so or we are
                  legally obliged or entitled to do so. However, we reserve the
                  right to commission external service providers to support us
                  in providing our services. These service providers are
                  contractually bound to our instructions and are subject to the
                  same data protection standards as we are.
                </CardDescription>
              </Card>
              <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
                <CardTitle className="mt-5 text-xl">3. Cookies</CardTitle>
                <CardDescription className="text-[18px]">
                  Cookies are small text files that are stored on your computer
                  when you visit a website. Cookies are used to facilitate or
                  personalize the use of a website. We only use cookies to the
                  extent necessary to operate our website. We do not use cookies
                  for advertising purposes or to create user profiles. You can
                  set your browser so that it does not accept cookies or so that
                  it informs you before a cookie is stored. Please note,
                  however, that some functions of our website may not be
                  available or may only be available to a limited extent if you
                  reject cookies.
                </CardDescription>
                <CardTitle className="mt-5 text-xl">4. Your rights</CardTitle>
                <CardDescription className="text-[18px]">
                  You have the right to request information from us at any time
                  about the personal data stored about you. You also have the
                  right to request the correction or deletion of your personal
                  data, provided there are no legal retention obligations to the
                  contrary. You also have the right to request the restriction
                  of the processing of your personal data or to object to the
                  processing of your personal data. You also have the right to
                  receive your personal data in a structured, common and
                  machine-readable format or to transmit it to another person
                  responsible.
                </CardDescription>
                <CardDescription className="text-[18px]">
                  To exercise your rights, you can contact us at:
                </CardDescription>
                <h1 className="mt-5">BildKom International</h1>
                <h1> GmbH Hardgutstrasse 28 </h1>
                <h1>8048 Zurich</h1>
                <h1>Email: bkcontact@bildkom.com</h1>
                <CardDescription className="text-[18px]">
                  You also have the right to lodge a complaint with the relevant
                  data protection authority if you believe that the processing
                  of your personal data violates data protection law.
                </CardDescription>
                <CardTitle className="mt-5 text-xl">
                  5. Changes to this privacy policy
                </CardTitle>
                <CardDescription className="text-[18px]">
                  We reserve the right to change this privacy policy at any
                  time. You can find the current version on our website. We
                  recommend that you read this privacy policy regularly to stay
                  informed about how your personal data is handled.
                </CardDescription>
                <p className="mt-5">As of: October 2023</p>
              </Card>
            </div>
          </div> */}
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="bg-secondary"/>
          <Footer />
        </div>
      </div>
    </>
  );
}
