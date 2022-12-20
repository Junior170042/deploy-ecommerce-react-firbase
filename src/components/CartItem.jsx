import React from 'react'
import { NavLink } from 'react-router-dom'
const CartItem = (item) => {
    return (
        <div className="card mb-4" style={{ width: "18rem" }} key={item.id}>
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                    ${item.price}
                </p>
                <NavLink to={`/details/${item.id}`} className="btn btn-outline-primary">
                    Comprar
                </NavLink>
            </div>
        </div>
    )
}

export default CartItem
