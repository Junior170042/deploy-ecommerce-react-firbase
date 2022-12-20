import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import Signup, { userOff } from './buttons/Signup'
import CartBtn from './buttons/CartBtn'
import { useState } from 'react'
const Header = () => {

    const userState = localStorage.getItem('userState');
    const [user, setUser] = useState(false);

    useEffect(() => {
        if (userState === 'true') {
            setUser(true);
        }

    }, [userState])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
                <NavLink className="navbar-brand mx-3 fw-bold me-3 titulo" to="/" id="brand">SMART LITE SHOP</NavLink>
                <div className="container-fluid py-2">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0 ">
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link" to="/product">
                                    Productos
                                </NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link" to="/about">
                                    Acerca de
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contacto
                                </NavLink>
                            </li>

                        </ul>
                        <CartBtn />
                        {!user && <Login />}
                        {!user && <Signup />}
                        {user && <span className="text-center p-2 mx-5" id="user"><i className="me-2 fa fa-user"></i><strong>{localStorage.getItem('userName')}</strong></span>}

                    </div>
                    {user && <NavLink to="/" className="titulo text-secondary ms-auto me-3 py-2" id="btnCerrar">
                        <i className="fa fa-user-slash" onClick={userOff}>Cerrar sesión</i>
                    </NavLink>}

                </div>

            </nav>

        </>
    )
}

export default Header