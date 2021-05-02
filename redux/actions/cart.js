const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const addToCartAction = data => ({
  type: ADD_ITEM,
  payload: data
});

const updateItemAction = data => ({
  type: UPDATE_ITEM,
  payload: data
});

const deleteItemAction = data => ({
  type: DELETE_ITEM,
  payload: data
});

export { addToCartAction, updateItemAction, deleteItemAction };
