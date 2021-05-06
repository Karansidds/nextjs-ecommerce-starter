import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import cartReducer from './cart';

const combinedReducer = combineReducers({
  cart: cartReducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    if (state.cart) nextState.cart = state.cart; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default reducer;
