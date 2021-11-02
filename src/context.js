import React, { Component } from 'react';

// first, create a new context object
const ProductContext = React.createContext();
// Provider: set it up at the top of our application
// Consumer: grab the context wherever you want using this

class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="hello from context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };