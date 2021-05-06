import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import client from '../../utils/apiSauce';

const initialState = {
  cart: {
    items: [],
    loading: false,
    error: {}
  }
};

export const fetchItemsAsync = createAsyncThunk(
  'cart/fetchCart',
  (userId: string) =>
    client
      .get(`https://fakestoreapi.com/products`)
      .then(({ data }) => data)
      .catch(err => err)
);

const hydrate = createAction(HYDRATE);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    modifyCart: (state, action) => {
      const cart = [...state.cart.items, action.payload];
      state.cart.items = cart;
    },
    deleteCart: (state, action) => {
      let cart = [...state.cart.items];
      cart = cart.filter(item => item.id !== action.payload);

      state.cart.items = cart;
    }
  },
  extraReducers: {
    [hydrate.type]: (state, action) => {
      return {
        ...state,
        ...(action.payload as any)[cartSlice.name]
      };
    },
    [fetchItemsAsync.pending.type]: state => {
      state.cart.loading = true;
    },
    [fetchItemsAsync.fulfilled.type]: (state, action) => {
      state.cart = {
        loading: false,
        items: action.payload,
        error: {}
      };
    },
    [fetchItemsAsync.rejected.type]: (state, action) => {
      state.cart = {
        loading: false,
        items: [],
        error: action.payload
      };
    }
  }
});

export const { modifyCart, deleteCart } = cartSlice.actions;

// Export cart reducer
export default cartSlice.reducer;
