import React, { Component } from "react";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

class App extends Component {
  state = {
    Products: products,
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Products products={this.state.Products} />
      </React.Fragment>
    );
  }
}

export default App;
