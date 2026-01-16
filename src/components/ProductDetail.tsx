import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Data from '../Data';
import { addItem, deleteItem } from '../redux/action';
import { AppDispatch } from '../redux/store';
import { Product } from '../redux/reducers/addItem';

const ProductDetail: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [cartBtn, setCartBtn] = useState<string>("Agregar al carrito");
    const { id } = useParams<{ id: string }>();

    // Finding the selected product
    const product = Data.find((pro: Product) => pro.id.toString() === id);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-700">Producto no encontrado</h2>
            </div>
        );
    }

    const handleCart = () => {
        if (cartBtn === "Agregar al carrito") {
            dispatch(addItem(product));
            setCartBtn("Quitar del carrito");
        } else {
            dispatch(deleteItem(product));
            setCartBtn("Agregar al carrito");
        }
    };

    return (
        <section className="bg-white min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 flex justify-center bg-gray-50 rounded-3xl p-8 shadow-inner">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-[500px] w-auto object-contain hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {product.title}
                        </h1>
                        <div className="w-16 h-1 bg-blue-600 mb-6"></div>

                        <div className="flex items-center mb-6">
                            <span className="text-3xl font-bold text-blue-600">
                                ${product.price.toLocaleString()}
                            </span>
                            <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full">
                                En Stock
                            </span>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <button
                            className={`w-full md:w-max px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 ${cartBtn === "Agregar al carrito"
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-red-500 hover:bg-red-600 text-white"
                                }`}
                            onClick={handleCart}
                        >
                            {cartBtn}
                        </button>

                        <div className="mt-10 border-t border-gray-100 pt-8 grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Envío gratis
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Garantía oficial
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
