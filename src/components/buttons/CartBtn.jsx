import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CartBtn = () => {

    //we get a state of addItem (the exported function)  the array that is returnded from the component
    const state = useSelector((state) => state.addItems)
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2 ">
                <span className=" fa fa-shopping-cart me-2"></span><strong className="text-danger">({state.length})</strong>
            </NavLink>
        </>
    )
}

export default CartBtn