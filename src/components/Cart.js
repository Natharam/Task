import React from "react";
import Empty from "./Empty";
import "../css/Cart.css";

const Cart = (props) => {
  console.log(props);

  let cartItems = props.cartItems.map((product) => {
    return (
      <div className="cart-item" key={product.name}>
        <img
          className="cart-item-image"
          src={product.image}
          alt="cart-item-img"
        />
        <div className="cart-item-info">
          <p className="cart-item-name"><strong>Name :</strong> {product.name}</p>
          <p className="cart-item-price"><strong>Price :</strong> {product.price}</p>
        </div>
        <div className="cart-item-total">
          <p className="quantity">
          <strong>Quantity :</strong> {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
          </p>
          <p className="cart-item-amount"><strong>Total :</strong> {product.quantity * product.price}</p>
        </div>
        <button
          className="cart-item-remove"
          onClick={() => props.removeProduct(product.id)}
        >
          ×
        </button>
      </div>
    );
  });

  let view;
  if (props.cartItems.length <= 0) {
    view = <Empty />;
  } else {
    view = <div className="cart-items">{cartItems}</div>;
  }

  return <>{view}</>;
};

export default Cart;
