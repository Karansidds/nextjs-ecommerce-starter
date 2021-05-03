import React from 'react';
import { connect } from 'react-redux';
import { modifyCartAction } from '../redux/actions/cart';
import styles from '../styles/Home.module.css';

const Home = ({ cart: { cart }, modifyCartAction }) => {
  return <div className={styles.container}></div>;
};

const mapStateToProperties = state => ({
  cart: state.cart
});

export default connect(mapStateToProperties, { modifyCartAction })(Home);
