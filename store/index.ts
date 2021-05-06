import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './cart/cartSlice';

const initStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    }
  });
};

export type AppStore = ReturnType<typeof initStore>;

export const wrapper = createWrapper(initStore);
