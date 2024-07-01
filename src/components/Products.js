import React from 'react';
import ProductList from './ProductList';
import './Products.css';

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <h1 className="mb-5">Our Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
