const MODIFY_CART = 'MODIFY_CART';
const DELETE_ITEM = 'DELETE_ITEM';

const modifyCartAction = data => dispatch => {
  dispatch({
    type: MODIFY_CART,
    payload: data
  });
};

const deleteItemAction = data => dispatch => {
  dispatch({
    type: DELETE_ITEM,
    payload: data
  });
};

export { modifyCartAction, deleteItemAction };
