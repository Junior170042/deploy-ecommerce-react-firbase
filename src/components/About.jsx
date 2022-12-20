import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold">Acerca de Nosotros</h1>
                        <p className="lead mb-4">Somos un equipo lider del mercado encargado a ofrecer a la comunidad toda una variedad de productos de buena calidad, con precio accesible. Nosotros ofrecemos un servicio seguro y confiable, con nosotros tus compras siempre están aseguradas.</p>

                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contactarnos</NavLink>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center my-3">
                        <img src="/assets/images/about.png" alt="Nosotros"
                            width="400px"
                            height="300px"
                        >

                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About