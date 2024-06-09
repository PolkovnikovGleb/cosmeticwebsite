import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ProductsSlice from './Products/ProductsSlice';
import NewsSlice from './News/NewsSlice';
import PostsSlice from './Posts/PostsSlice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    posts: PostsSlice,
    news: NewsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
