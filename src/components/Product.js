import React from "react";
import "../css/Product.css";

const Product = (props) => {
  let image = props.image;
  let name = props.name;
  let price = props.price;
  let id = props.id;
  let quantity = props.productQuantity;

  let selectedProducts = {
    image,
    name,
    price,
    id,
    quantity,
  };

  return (
    <div className="product-wrapper">
      <div className="product">
        <h3 className="product-name">{props.name}</h3>
        <img src={props.image} alt="product" className="product-image" />
        <h3>Price : {props.price}</h3>
        <p className="product-quantity">Quantity : {props.productQuantity}</p>
        <button
          onClick={() => {
            props.addToCart(selectedProducts);
          }}
          className="add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
