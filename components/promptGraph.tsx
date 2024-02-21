import React, { useEffect, useState } from "react";
import axios from "axios";
// import ReactHtmlParser from 'react-html-parser';

const PromptGrph = () => {
  const [iframeContent, setIframeContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await axios.get('http://46.101.116.31:3000/get-treemap', {
          responseType: 'text'
        });
        setIframeContent(response.data);
      } catch (error) {
        console.error('Failed to fetch HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <>
      <div className="w-full rounded-lg flex text-lg mt-2 ">
        <iframe
          className="w-full rounded-lg mr-3 h-[1000px] "
          srcDoc={iframeContent}
        />
      </div>
      
    </>
  );
};

export default PromptGrph;
