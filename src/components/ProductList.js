import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';


export default class ProductList extends Component {
    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="our" title="products" />
                        <div className="row">
                        <ProductConsumer>
                        {/* we are going to always use a function to use the product consumer */}
                            {(value) => {
                                return value.products.map( product => {
                                    return <Product key={product.id} product={product} />
                                });
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
