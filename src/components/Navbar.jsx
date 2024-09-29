import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Model from '../Model';
import Cart from './Cart';
import { UseCart } from './ContextReducer';

export default function Navbar() {

    let data = UseCart();
    const [cartDisplay, setCartDisplay] = useState(false);

    const navigate = useNavigate();
    const handleLogout = async() =>{
        localStorage.removeItem("authToken");
        navigate("/api/auth/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fst-italic fw-bold" to="/">BiteDash</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/api/orders/orderhistory">My orders</Link>
                                </li>
                                : ""
                            }
                        </ul>
                        {!(localStorage.getItem("authToken")) ?
                            <div className='d-flex'>
                                <Link className="btn bg-white text-info mx-1 fw-bold" to="/api/auth/login">Login</Link>
                                <Link className="btn bg-white text-info mx-1 fw-bold" to="/api/auth/register">Register</Link>
                            </div>
                            :
                            <div>
                                <div className="btn bg-white text-info mx-1 fw-bold" onClick={()=>setCartDisplay(true)}>
                                    My Cart {" "}
                                    <Badge pill bg='danger'> {data.length} </Badge>
                                </div>
                                {cartDisplay?<Model onClose={()=>setCartDisplay(false)}><Cart/></Model>:null}
                                <div onClick={handleLogout} className="btn bg-white text-danger mx-1 fw-bold">
                                    Logout
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
