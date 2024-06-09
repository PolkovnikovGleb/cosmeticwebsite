import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ProductsSlice from './Products/ProductsSlice';
import ArticlesSlice from './Articles/ArticlesSlice';
import NewsSlice from './News/NewsSlice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    articles: ArticlesSlice,
    news: NewsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
