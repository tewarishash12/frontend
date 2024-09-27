import React from 'react';
import burger from "../assets/carousel/burger.jpg";
import pizza from "../assets/carousel/pizza.jpeg";
import momos from "../assets/carousel/momos.jpg";
import biryani from "../assets/carousel/biryani.jpeg"
import tikka from "../assets/carousel/panner-tikka.jpeg"

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" style={{ maxHeight: "550px" }}>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info text-white bg-info" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img src={burger} className="d-block w-100" alt="burger"
                        style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={pizza} className="d-block w-100" alt="pizza"
                        style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={momos} className="d-block w-100" alt="momos"
                        style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={biryani} className="d-block w-100" alt="momos"
                        style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={tikka} className="d-block w-100" alt="momos"
                        style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(40%)" }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
