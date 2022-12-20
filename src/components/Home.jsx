import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="assets/images/home/image1.png" className="d-block w-100" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/home/image2.png" className="d-block w-100" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/home/image3.png" className="d-block w-100" alt="Iphone" />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/home/image4.png" className="d-block w-100" alt="Iphone" />
                    </div>

                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon bg-dark
                    " aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Product />
        </>
    )
}

export default Home