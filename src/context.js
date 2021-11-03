import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

// first, create a new context object
const ProductContext = React.createContext();
// Provider: set it up at the top of our application
// Consumer: grab the context wherever you want using this

class ProductProvider extends Component {

    state = {
        products: storeProducts,
        detailProduct
    }

    handleDetail = () => {
        console.log('hello from detail');
    }

    addToCart = () => {
        console.log('hello from add to cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handelDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };