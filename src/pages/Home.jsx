import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import burger from "../assets/carousel/burger.jpg";
import pizza from "../assets/carousel/pizza.jpeg";
import momos from "../assets/carousel/momos.jpg";
import biryani from "../assets/carousel/biryani.jpeg"
import tikka from "../assets/carousel/panner-tikka.jpeg"
import { useState, useEffect } from 'react'

export default function Home() {

    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodList, setFoodList] = useState([]);

    const loadContent = async () => {
        let res = await fetch(`https://food-delivery-app-backend-85ht.onrender.com/api/content/food`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        res = await res.json();
        // console.log(res);

        setFoodList(res[0]);
        setFoodCat(res[1]);
    }

    useEffect(() => {
        loadContent();
    }, [])


    return (
        <div >
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" style={{ maxHeight: "550px" }}>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                            </div>
                        </div>

                        <div className="carousel-item active">
                            <img src={burger} className="d-block w-100" alt="burger"
                                style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(50%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={pizza} className="d-block w-100" alt="pizza"
                                style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(50%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={momos} className="d-block w-100" alt="momos"
                                style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(50%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={biryani} className="d-block w-100" alt="momos"
                                style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(50%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={tikka} className="d-block w-100" alt="momos"
                                style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(50%)" }} />
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
            <div className='container m-3 '>
                {
                    foodCat !== [] ?
                        foodCat.map((data) => {
                            return (
                                <div className='row mb-3 '>
                                    <div key={data._id} className='fs-2 m-3 text-warning'>{data.CategoryName}</div>
                                    <hr />
                                    {foodList !== [] ?
                                        foodList
                                            .filter((list) => (list.CategoryName === data.CategoryName) && (list.name.toLowerCase().includes(search.toLowerCase())))
                                            .map((item) => {
                                                return (
                                                    <div key={item._id} className='col-12 col-md-6 col-lg-4 col-xl-3'>
                                                        <Card
                                                        foodItems={item}
                                                        options={item.options[0]}></Card>
                                                    </div>
                                                );
                                            })
                                        : <div>No such data exists</div>
                                    }
                                </div>
                            );
                        })
                        : <div>'''''''''''''''</div>
                }
            </div>
            <div><Footer /></div>
        </div>
    )
}
