import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { useState, useEffect } from 'react'

export default function Home() {

    const [foodCat, setFoodCat] = useState([]);
    const [foodList, setFoodList] = useState([]);

    const loadContent = async () => {
        let res = await fetch(`http://localhost:5000/api/content/food`, {
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
            <div><Carousel /></div>
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
                                        .filter((list)=> list.CategoryName === data.CategoryName)
                                        .map((item)=>{
                                                return(
                                                    <div key={item._id} className='col-12 col-md-6 col-lg-4 col-xl-3'>
                                                        <Card 
                                                        foodName={item.name}
                                                        options={item.options[0]}
                                                        imgSrc={item.img}></Card>
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
