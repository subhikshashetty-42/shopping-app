import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cart.map(item => (
            <div key={item.id} className="col-md-4">
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">${item.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-secondary" onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-secondary" onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <button className="btn btn-danger mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
