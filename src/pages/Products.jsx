import React, { Component } from 'react'
import ProductCard from '../components/ProductCard';


class Products extends Component {

    render() { 
        return (
            <main className="container overflow-hidden ">
                <div className="row my-5">
                    {this.props.products.map(product=> 
                        <div className="col gy-5 d-flex justify-content-center align-items-center ">
                            <ProductCard product={product}/>
                        </div>
                    )}
                </div>
            </main>
        );
    }
}
 
export default Products;