import React from "react";
import Product from "./Product";
import "../css/Products.css";

const ProductList = (props) => {
  console.log(props.products);
  return (
    <div>
      <h3 className="products-heading">Product List</h3>
      <div className="products">
        {props.products &&
          props.products.map((product) => (
            <Product
              key={product.id}
              price={product.price}
              name={product.name}
              image={product.image}
              id={product.id}
              addToCart={props.addToCart}
              productQuantity={props.productQuantity}
              updateQuantity={props.updateQuantity}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
