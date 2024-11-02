import React from 'react'
import { DispatchCart, UseCart } from './ContextReducer'
import { FaTrash } from 'react-icons/fa';


export default function Cart() {
    let data = UseCart();
    let dispatch = DispatchCart();
    const handleCheckout = async () => {
        try {
            let userEmail = localStorage.getItem("userEmail");
            let res = await fetch(`https://food-delivery-app-backend-85ht.onrender.com/api/orders/orderData`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    order_data: data,
                    email:userEmail,
                    order_date:new Date().toDateString()
                })
            })
            console.log(res.status);
            if(res.status===200)
                dispatch({type:"Drop"})
        } catch (err) {
            console.log("Server Error", err.message);
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (
        <>
            {data.length === 0 ?
                <div>
                    <div className="m-5 w-100 text-center fs-3" style={{ overflowY: "hidden" }}>The cart is empty!</div>
                </div> :
                <div>
                    <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
                        <div>
                            <table className='table table-hover'>
                                <thead className='text-info fs-4'>
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Quantity</th>
                                        <th scope='col'>Size</th>
                                        <th scope='col'>Amount</th>
                                        <th scope='col'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((food, index) => (
                                        <tr>
                                            <th scope='row' >{index + 1}</th>
                                            <td>{food.name}</td>
                                            <td>{food.quan}</td>
                                            <td>{food.size}</td>
                                            <td>{food.price}</td>
                                            <td><button type="button" className='btn p-0'><FaTrash onClick={() => { dispatch({ type: "Remove", index: index }) }} className='text-danger' /> </button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <h1 className='fs-2'>Total Price: ₹{totalPrice}/-</h1>
                                <button className='btn bg-info mt-5' onClick={handleCheckout}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
