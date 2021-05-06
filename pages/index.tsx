import React from 'react';
import { connect } from 'react-redux';
import { modifyCart, fetchItemsAsync } from '../store/cart/cartSlice';

const Home = ({ cart: { cart }, modifyCart, fetchItemsAsync }) => {
  React.useEffect(() => {
    fetchItemsAsync();
  }, []);

  const addItem = () => {
    modifyCart({ title: 'karan', id: 'ff' });
  };

  if (cart.loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className=" bg-red-400 h-screen">
      <button onClick={addItem}>Add Item</button>

      {/* {cart.items.map(item => (
        <ul key={item.id} className="p-2">
          <li>{item.title}</li>
        </ul>
      ))} */}
    </div>
  );
};

const mapStateToProperties = state => ({
  cart: state.cart
});

export default connect(mapStateToProperties, { modifyCart, fetchItemsAsync })(
  Home
);
