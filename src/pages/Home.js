import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div>
          <h1 className="display-4">Welcome to Our Store</h1>
          <p className="lead">Discover our amazing products!</p>
          <Link to="/products" className="btn btn-primary btn-lg mt-4">Shop Now</Link>
        </div>
      </div>
      <div className="shopping-images">
        <img src="https://plus.unsplash.com/premium_photo-1676739688583-99db8dedd603?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sales" />
        <img src="https://plus.unsplash.com/premium_photo-1714226832704-89fca6fe064b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Discount" />
        <img src="https://plus.unsplash.com/premium_photo-1661338902363-fc3f8059fead?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="Products" />
      </div>
    </div>
  );
};

export default Home;
