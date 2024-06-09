import { Post } from '../type/typePost';

export const postsFetchInit = async (): Promise<Post[]> => {
  try {
    const result = await fetch('https://fakestoreapi.com/products?limit=4');
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
