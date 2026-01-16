import React from 'react';
import Product from './Product';

const Home: React.FC = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/assets/images/home/image1.png"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        Descubre la <span className="text-blue-400">Tecnología</span> del Mañana
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
                        Encuentra los mejores dispositivos y accesorios para potenciar tu vida digital. Calidad garantizada en cada compra.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#product"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Comprar Ahora
                        </a>
                        <a
                            href="/about"
                            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold rounded-full transition-all duration-300"
                        >
                            Saber Más
                        </a>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>

            <div id="product">
                <Product />
            </div>
        </main>
    );
}

export default Home;