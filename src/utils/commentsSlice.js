import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await axios.get(`https://dummyjson.com/comments`);
    return response.data.comments;
  },
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {comments: [], loading: false, error: null},

  extraReducers: builder => {
    builder.addCase(fetchComments.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      (state.loading = false), (state.comments = action.payload);
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default commentsSlice.reducer;
