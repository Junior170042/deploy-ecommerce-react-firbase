import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogin from './buttons/GoogleLogin';
import { userOff } from './buttons/Firebase';
import CartBtn from './buttons/CartBtn';

const Header: React.FC = () => {
    const [user, setUser] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const userState = localStorage.getItem('userState');
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        if (userState === 'true') {
            setUser(true);
        }
    }, [userState]);

    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

    const activeLinkClass = "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1";
    const inactiveLinkClass = "text-gray-600 hover:text-blue-500 transition-colors";

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                <NavLink
                    className="text-2xl font-bold text-blue-700 tracking-tight"
                    to="/"
                >
                    SMART LITE SHOP
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                                to="/"
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                                to="/product"
                            >
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                                to="/about"
                            >
                                Acerca de
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                                to="/contact"
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>

                    <div className="flex items-center space-x-4 border-l pl-8 border-gray-200">
                        <CartBtn />
                        {!user ? (
                            <GoogleLogin />
                        ) : (
                            <div className="flex items-center space-x-4">
                                <span className="flex items-center text-gray-700 font-medium">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    {userName}
                                </span>
                                <NavLink
                                    to="/"
                                    className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center"
                                    onClick={userOff}
                                >
                                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Cerrar sesión
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gray-50 border-t border-gray-100 py-4 px-4 space-y-4 shadow-inner">
                    <ul className="flex flex-col space-y-3">
                        <li><NavLink className="block py-2 text-gray-700 font-medium" to="/" onClick={() => setIsMenuOpen(false)}>Inicio</NavLink></li>
                        <li><NavLink className="block py-2 text-gray-700 font-medium" to="/product" onClick={() => setIsMenuOpen(false)}>Productos</NavLink></li>
                        <li><NavLink className="block py-2 text-gray-700 font-medium" to="/about" onClick={() => setIsMenuOpen(false)}>Acerca de</NavLink></li>
                        <li><NavLink className="block py-2 text-gray-700 font-medium" to="/contact" onClick={() => setIsMenuOpen(false)}>Contacto</NavLink></li>
                    </ul>
                    <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
                        <CartBtn />
                        {!user ? (
                            <GoogleLogin />
                        ) : (
                            <div className="flex flex-col space-y-3">
                                <span className="font-medium text-gray-800 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    {userName}
                                </span>
                                <NavLink
                                    to="/"
                                    className="text-red-500 font-semibold"
                                    onClick={() => { userOff(); setIsMenuOpen(false); }}
                                >
                                    Cerrar sesión
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
