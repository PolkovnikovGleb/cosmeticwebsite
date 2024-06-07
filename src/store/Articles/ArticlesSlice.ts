import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './state';
import { articleFetchInit } from '../../api/apiArticles';

export const initialState: State = {
  articles: [],
  error: '',
};

export const articlesInit = createAsyncThunk(
  'articles/init',
  async () => await articleFetchInit(),
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(articlesInit.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(articlesInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
