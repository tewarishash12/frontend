import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function MyOrders() {

    let [orderData, setOrderdata] = useState("");

    const orderHistory = async () => {
        await fetch(`https://food-delivery-app-backend-85ht.onrender.com/api/orders/orderhistory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: localStorage.getItem("userEmail")
            })
        }).then(async (res) => {
            let response = await res.json();
            setOrderdata(response);
        })
    }

    useEffect(() => {
        orderHistory()
    }, [])

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className="container">
                <div className="row">
                    {orderData !== {} ? Array(orderData).map((data) => {
                        return (
                            data.order_history ?
                                data.order_history.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((orderList) => {
                                            return (
                                                <div>
                                                    {orderList.order_date ? <div className="m-auto mt-5">
                                                        {data = orderList.order_date}
                                                        <hr />
                                                    </div> :
                                                        <div className="col-12 col-md-6 col-lg-3">
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "350px" }}>
                                                                {/* <img src={orderList.img} alt="..." className='card-img-top' style={{height:"120px", objectFit:"fill"}}/> */}
                                                                <div className="card-body">
                                                                    <div className="card-title">{orderList.name}</div>
                                                                    <div className="container w-100 p-0">
                                                                        <span className="m-1">{orderList.quan}</span>
                                                                        <span className="m-1">{orderList.size}</span>
                                                                        <span className="m-1">Order Date: {data}</span>
                                                                        <div className="d-inline ms-2 h-100 w-20 fs-5">
                                                                            ₹{orderList.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }) :
                                <div className='d-flex min-vh-100 flex-column justify-content-center align-items-center '>
                                    <div className='fs-2'>You haven't ordered anything yet</div>
                                    <Link to="/" className=''><button className='bg-info fs-2 text-white'>Start Ordering</button></Link>
                                </div>
                        )
                    }) : ""
                    }
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </>
    )
}
