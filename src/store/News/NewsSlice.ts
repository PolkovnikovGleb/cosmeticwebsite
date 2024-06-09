import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './state';
import { newsFetchInit } from '../../api/apiNews';

export const initialState: State = {
  news: [],
  error: '',
};

export const newsInit = createAsyncThunk(
  'news/init',
  async () => await newsFetchInit(),
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(newsInit.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(newsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
