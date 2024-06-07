import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './state';
import { productsFetchInit } from '../../api/apiProducts';

export const initialState: State = {
  products: [],
  error: '',
};

export const productsInit = createAsyncThunk(
  'products/init',
  async () => await productsFetchInit(),
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(productsInit.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(productsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
