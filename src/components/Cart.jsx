import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../redux/action/index.js'
import { NavLink } from 'react-router-dom'
const Cart = () => {

    //we get a state of addItem (the exported function)  the array that is returnded from the component
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(deleteItem(item))
    }

    const myButton = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkup" className="btn btn-outline-primary w-25 mb-5 mx-auto">Ir a pagar</NavLink>
                </div>
            </div >
        )
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-4 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3 className=" display-4 fw-bold text-center">No hay producto en tu canasta!</h3>
                    </div>
                    <NavLink className=" text-center display-5" to="/product">Agregar ahora</NavLink>
                </div>
            </div>
        )
    }

    const cartItems = (cart) => {
        return (
            <div className="px-4 my-4 bg-light rounded-3" key={cart.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cart)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cart.img} alt={cart.title}
                                width="180px" height="200px"
                            >

                            </img>
                        </div>
                        <div className="col-md-4">
                            <h3>{cart.title}</h3>
                            <p className="lead fw-bold">${cart.price}</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && myButton()}
        </>
    )
}

export default Cart
