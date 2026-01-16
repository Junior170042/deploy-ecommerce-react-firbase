import React from 'react';
import Data from '../Data';
import CartItem from './CartItem';

const Product: React.FC = () => {
    return (
        <section className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                        Nuestra Colección
                    </h1>
                    <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Data.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;