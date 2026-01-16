import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CartBtn: React.FC = () => {
    const state = useSelector((state: RootState) => state.addItems);

    return (
        <NavLink
            to="/cart"
            className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 hover:bg-blue-50 border-2 border-transparent hover:border-blue-100 transition-all duration-300"
            aria-label={`Carrito con ${state.length} productos`}
        >
            <svg
                className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            {state.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white shadow-md transform group-hover:scale-110 transition-transform">
                    {state.length}
                </span>
            )}
        </NavLink>
    );
};

export default CartBtn;