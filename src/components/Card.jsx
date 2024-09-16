import React from 'react'
import { Link } from 'react-router-dom'
import pannerTikka from "../assets/card/panner-tikka.jpeg"

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px",}}>
                <img src={pannerTikka} style={{objectFit:"cover", height:"180px", width:"100%"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Panner Tikka</h5>
                    <p className="card-text">A tasty delicacy especially for the vegetarians.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-info rounded' name="" id="">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-info rounded' name="" id="">
                            <option value="half"> Half </option>
                            <option value="full"> Full </option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}
