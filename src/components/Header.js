import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = (props) => {
  // console.log(props.cartItems);
  return (
    <header>
      <div className="container">
        <div className="cart">
          <div className="cart-info">
            <p>No. of items : {props.totalItems}</p>
            <p>Sub Total : {props.total}</p>
          </div>

          <div className="show-cart">
            <Link to="/cart">Show Cart</Link>
          </div>
          <div className="go-back">
            <Link to="/">Add More Items</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
