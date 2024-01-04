import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import usersReducer from './usersSlice';
import commentsReducer from './commentsSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});

export default appStore;
