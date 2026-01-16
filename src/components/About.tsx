import React from 'react';
import { NavLink } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-black text-blue-700 mb-8 leading-tight">
                            Acerca de <span className="text-gray-900 border-b-8 border-blue-100">Nosotros</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10">
                            Somos un equipo líder del mercado encargado de ofrecer a la comunidad toda una variedad de productos de buena calidad, con precio accesible.
                            <br /><br />
                            Nuestro compromiso es brindar un servicio seguro y confiable, asegurando que cada experiencia de compra supere las expectativas de nuestros clientes. Con nosotros, tus inversiones están protegidas y tu satisfacción garantizada.
                        </p>

                        <NavLink
                            to="/contact"
                            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform active:scale-95"
                        >
                            Contáctanos Ahora
                        </NavLink>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-50 rounded-[2rem] rotate-3 -z-10"></div>
                            <img
                                src="/assets/images/about.png"
                                alt="Nuestro equipo y valores"
                                className="w-full h-auto rounded-[2rem] shadow-2xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;