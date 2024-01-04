import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`https://dummyjson.com/users`);
  return response.data.users;
});


const userSlice = createSlice({
  name: 'users',
  initialState: {usersData: [], loading: false, error: null},

  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false), (state.usersData = action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

// export {} = userSlice.actions

export default userSlice.reducer;
