import { AnyAction } from 'redux';

interface CartState {
  cart: any[];
}

const initialState = {
  cart: []
};

const cartReducer = (state: CartState = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'FETCH_CART_ITEMS':
      return {
        ...state,
        cart: action.payload
      };

    case 'MODIFY_CART': {
      const cart = [...state.cart, action.payload];
      return {
        ...state,
        cart
      };
    }

    case 'DELETE_ITEM': {
      const cart = [...state.cart];
      return state;
    }

    default:
      return state;
  }
};

export default cartReducer;
