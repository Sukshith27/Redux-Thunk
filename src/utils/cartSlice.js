// src/utils/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk(
  'cart/fetchItems',
  async () => {
    const response = await axios.get('https://dummyjson.com/todos');
    return response.data;
  }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], loading: false, error: null },
    reducers: {
      addItem: (state, action) => {
        state.items.push(action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchItems.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchItems.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false;
        })
        .addCase(fetchItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
