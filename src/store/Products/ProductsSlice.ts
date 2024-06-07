import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './state';
import { productsFetchInit } from '../../api/apiProducts';

export const initialState: State = {
  products: [],
  error: '',
};

export const productsInit = createAsyncThunk(
  'products/init',
  async () => await productsFetchInit()
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder
      .addCase(productsInit.fulfilled, (state: any, action: any) => {
        state.products = action.payload;
      })
      .addCase(productsInit.rejected, (state: any, action: any) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
