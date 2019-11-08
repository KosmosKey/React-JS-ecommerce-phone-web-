import React, { Component } from 'react'
import product from './Product'
import Title from './Title';
import {ProductConsumer} from '../context';
import Product from './Product';

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        
                        <div className="row">
                        <ProductConsumer>
                            {value => {
                               return value.products.map( products => {
                                   return <Product key={product.id} product=
                                   {product}  />;
                               })
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            /* <div>
                <h3>hello from product</h3>
            </div> */
        )
    }
}
