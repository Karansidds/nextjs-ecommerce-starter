import React from 'react';
import { connect } from 'react-redux';
import { modifyCart } from '../../../store/cart/cartSlice';

const CartButton = ({ data, cart: { cart }, modifyCart }) => {
  const [item, updateItem] = React.useState(data);
  // Value that indicates whether an item is present in the cart
  const itemExists: boolean = React.useMemo(
    () => cart.some(param => param.id === item.id),
    [cart, item]
  );

  const handleAddItem = () => {
    modifyCart(item);
  };

  /* Add a custom button. The functionality will be the same. */
  if (itemExists) {
    return <h1>Item exists</h1>;
  }

  return <button onClick={handleAddItem}>Add Item</button>;
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { modifyCart })(CartButton);
