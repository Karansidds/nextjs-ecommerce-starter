import client from 'apisauce';

const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
const MODIFY_CART = 'MODIFY_CART';
const DELETE_ITEM = 'DELETE_ITEM';

const fetchItemsAction = userId => dispatch => {
  client.get(`/some/url/${userId}`).then(data =>
    dispatch({
      type: FETCH_CART_ITEMS,
      payload: data
    })
  );
};

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

export { fetchItemsAction, modifyCartAction, deleteItemAction };
