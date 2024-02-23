// pages/api/get-data.ts

import { NextApiHandler } from 'next';

const getData: NextApiHandler = async (_, res) => {
  try {
    const apiEndpoint = 'http://46.101.116.31:3000/get-treemap';
    const response = await fetch(apiEndpoint, { cache: 'force-cache' });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const htmlContent = await response.text();

    res.status(200).send(htmlContent);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Failed to fetch data');
  }
};

export default getData;
