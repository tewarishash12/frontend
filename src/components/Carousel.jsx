import React from 'react'
import burger from "../assets/carousel/burger.jpg"
import pizza from "../assets/carousel/pizza.jpeg"
import momos from "../assets/carousel/momos.jpg"

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" style={{ objectFit: "contain !important" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info text-white bg-info" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src={burger} className="d-block w-100" alt="burger"
                            style={{ maxHeight: "500px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={pizza} className="d-block w-100" alt="pizza"
                            style={{ maxHeight: "500px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={momos} className="d-block w-100" alt="momos"
                            style={{ maxHeight: "500px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
