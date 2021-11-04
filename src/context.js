import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

// first, create a new context object
const ProductContext = React.createContext();
// Provider: set it up at the top of our application
// Consumer: grab the context wherever you want using this

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
  };

  componentDidMount() {
    this.setProducts();
  }

  // copies the raw list of products into a new array called products
  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  // method to get item according to id
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
        return {detailProduct:product}
    })
  };

  addToCart = (id) => {
    console.log(`hello from add to cart the id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
