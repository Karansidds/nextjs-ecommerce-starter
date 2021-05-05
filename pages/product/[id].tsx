import React from 'react';
import { useRouter } from 'next/router';

const Product = () => {
  const {
    query: { id }
  } = useRouter();

  return <h1>{id}</h1>;
};

export default Product;
