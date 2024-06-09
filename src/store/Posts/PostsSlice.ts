import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './state';
import { postsFetchInit } from '../../api/apiPosts';

export const initialState: State = {
  posts: [],
  error: '',
};

export const postsInit = createAsyncThunk(
  'posts/init',
  async () => await postsFetchInit(),
);

const articlesSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postsInit.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(postsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
