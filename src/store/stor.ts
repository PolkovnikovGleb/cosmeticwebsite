import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ProductsSlice from './Products/ProductsSlice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
