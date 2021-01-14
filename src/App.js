import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      category: "",
      quantity: 1,
      quickViewProduct: {},
    };
  }

  getProducts() {
    let url =
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    axios.get(url).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  handleAddToCart = (selectedProducts) => {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex((x) => x.id === productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  };

  checkProduct = (productID) => {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  };

  sumTotalItems = () => {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total,
    });
  };

  handleRemoveProduct = (id, e) => {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id === id);
    cart.splice(index, 1);
    this.setState({
      cart,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  };

  sumTotalAmount = () => {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total,
    });
  };

  updateQuantity = (quantity) => {
    this.setState({
      quantity,
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <Router>
        <>
          <Header
            total={this.state.totalAmount}
            totalItems={this.state.totalItems}
            cartItems={this.state.cart}
            removeProduct={this.handleRemoveProduct}
            updateQuantity={this.updateQuantity}
            productQuantity={this.state.quantity}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <ProductList
                    products={this.state.products}
                    addToCart={this.handleAddToCart}
                    productQuantity={this.state.quantity}
                    updateQuantity={this.updateQuantity}
                  />
                );
              }}
            />
            <Route path="/cart" render={() => {
              return (
                <Cart cartItems={this.state.cart} removeProduct={this.handleRemoveProduct} />
              )
            }} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
