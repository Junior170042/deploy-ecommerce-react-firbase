import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../redux/reducers/addItem';

const CartItem: React.FC<Product> = (item) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100" key={item.id}>
            <div className="relative pt-[100%] group">
                <img
                    src={item.image}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    alt={item.title}
                />
            </div>
            <div className="p-5 flex flex-col flex-grow text-center">
                <h5 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {item.title}
                </h5>
                <p className="text-xl font-extrabold text-blue-600 mb-4">
                    ${item.price.toLocaleString()}
                </p>
                <div className="mt-auto">
                    <NavLink
                        to={`/details/${item.id}`}
                        className="block w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                        Ver Detalles
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
