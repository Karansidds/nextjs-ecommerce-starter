import { AnyAction } from 'redux';

interface CartState {
  cart: any[];
}

const initialState = {
  cart: []
};

const cartReducer = (state: CartState = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state
      };

    case 'UPDATE_ITEM':
      return state;

    case 'DELETE_ITEM':
      return state;

    default:
      return state;
  }
};

export default cartReducer;
