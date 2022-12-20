import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Data from '../Data'
import { addItem, deleteItem } from '../redux/action/index.js'

const ProductDetail = () => {
    //Just to use addItem and deleteItem
    const dispatch = useDispatch();
    const [cardBtn, setCartBtn] = useState("Agregar al carrito")
    //handle carrito de compra
    const handleCart = () => {
        if (cardBtn === "Agregar al carrito") {
            dispatch(addItem(product))
            setCartBtn("Quitar del carrito")

        } else {
            dispatch(deleteItem(product))
            setCartBtn("Agregar al carrito")
        }
    }
    const param = useParams()
    // eslint-disable-next-line eqeqeq
    const proSelected = Data.filter(pro => pro.id == param.id)
    const product = proSelected[0];

    return (
        <>
            <div className="container my-4 py-4">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={`../${product.img}`} alt={product.title}
                            height="400px"
                        />

                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className=" display-4 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead"> {product.desc}</p>

                        <button className="btn btn-outline-primary my-4"
                            onClick={() => handleCart(product)}
                        >
                            {cardBtn}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
