import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    console.log('####');
    const response = await axios.get(`https://dummyjson.com/products`);
    return response.data.products;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: {productData: [], loading: false, error: null},

  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.loading = false), (state.productData = action.payload);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

// export {} = productSlice.actions
export default productSlice.reducer;
