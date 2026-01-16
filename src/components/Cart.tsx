import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/action';
import { NavLink } from 'react-router-dom';
import { RootState, AppDispatch } from '../redux/store';
import { Product } from '../redux/reducers/addItem';

const Cart: React.FC = () => {
    const state = useSelector((state: RootState) => state.addItems);
    const dispatch = useDispatch<AppDispatch>();

    const handleClose = (item: Product) => {
        dispatch(deleteItem(item));
    };

    const emptyCart = () => {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                <div className="bg-gray-50 p-12 rounded-3xl shadow-inner text-center max-w-lg w-full">
                    <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">¡Tu carrito está vacío!</h3>
                    <p className="text-gray-500 mb-8 text-lg">Parece que aún no has agregado ningún producto increíble a tu colección.</p>
                    <NavLink
                        className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg transform active:scale-95"
                        to="/product"
                    >
                        Empezar a comprar
                    </NavLink>
                </div>
            </div>
        );
    };

    const cartItem = (item: Product) => {
        return (
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 mb-6 max-w-4xl mx-auto relative group" key={item.id}>
                <button
                    onClick={() => handleClose(item)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-2"
                    aria-label='Remove item'
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <div className="w-40 h-40 flex-shrink-0 bg-gray-50 rounded-xl p-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                        <h3 className="text-xl font-extrabold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                        <div className="flex items-center justify-center sm:justify-start">
                            <span className="text-2xl font-bold text-blue-600">${item.price.toLocaleString()}</span>
                            <span className="ml-4 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">Disponible</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-black text-gray-900 mb-12 text-center">Tu Carrito de Compra</h1>

                {state.length === 0 ? emptyCart() : (
                    <div className="space-y-4">
                        {state.map(cartItem)}

                        <div className="max-w-4xl mx-auto mt-12 flex justify-center">
                            <NavLink
                                to="/checkup"
                                className="w-full sm:w-max px-16 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 text-center"
                            >
                                Proceder al Pago
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
