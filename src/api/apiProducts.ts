import { Product } from '../type/typeProducts';

export const productsFetchInit = async (): Promise<Product[]> => {
  try {
    const result = await fetch('https://fakestoreapi.com/products');
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching album:', error);
    throw error;
  }
};
