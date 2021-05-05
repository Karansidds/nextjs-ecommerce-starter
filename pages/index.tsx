import React from 'react';
import { connect } from 'react-redux';
import { modifyCartAction, fetchItemsAction } from '../redux/actions/cart';
import styles from '../styles/Home.module.css';

const Home = ({ cart: { cart }, modifyCartAction, fetchItemsAction }) => {
  return <div className=" bg-red-400 h-screen"></div>;
};

const mapStateToProperties = state => ({
  cart: state.cart
});

export default connect(mapStateToProperties, {
  modifyCartAction,
  fetchItemsAction
})(Home);
