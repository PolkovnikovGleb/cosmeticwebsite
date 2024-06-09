import { Article } from '../type/typeArticle';

export const articleFetchInit = async (): Promise<Article[]> => {
  try {
    const result = await fetch('https://fakestoreapi.com/products?limit=4');
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};
