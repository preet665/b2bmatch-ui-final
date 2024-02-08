import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PromptGrph = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await axios.get('http://46.101.116.31:3000/get-treemap', {
          responseType: 'text'
        });
        setHtmlContent(response.data);
      } catch (error) {
        console.error('Failed to fetch HTML content:', error);
        // Handle error, e.g., set an error state, show a message, etc.
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div className="w-fit rounded-lg flex text-lg mt-2">
      <div
        className="w-screen rounded-lg mr-3"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default PromptGrph;
