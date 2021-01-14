import React from "react";
import { Link } from "react-router-dom";
import "../css/Empty.css";

function Empty() {
  return (
    <div className="empty">
      <h3>No items in Cart</h3>
      <Link to="/" className="go-back">
        Add Product to Cart
      </Link>
    </div>
  );
}

export default Empty;
