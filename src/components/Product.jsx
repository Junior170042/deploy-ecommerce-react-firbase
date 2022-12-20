import React from 'react'
import Data from '../Data'
import CartItem from './CartItem'

const Product = () => {
    return (
        <>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Productos</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className=" container">
                <div className="row justify-content-around">
                    {
                        Data.map(
                            CartItem
                        )
                    }
                </div>

            </div>
        </ >
    )
}

export default Product