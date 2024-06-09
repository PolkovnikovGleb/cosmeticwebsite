import { News } from '../type/typeNews';

export const newsFetchInit = async (): Promise<News[]> => {
  try {
    const result = await fetch('https://fakestoreapi.com/products?limit=3');
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('Error fetching news', error);
    throw error;
  }
};
