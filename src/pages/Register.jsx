import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ username: "", email: "", password: "", location: "" })

    const handleSubmit = async (e) => {
        e.preventDefault(); // synthetic event
        const res = await fetch(`https://food-delivery-app-backend-85ht.onrender.com/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password, location: credentials.location })
        });

        const json = await res.json();
        console.log(json);

        if (!json.success)
            alert("Enter valid credentials");
        else
            navigate('/api/auth/login');
    }

    const change = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                        <h2 className="text-center mb-4">Sign Up</h2>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">UserName</label>
                            <input type="text" className="form-control" id="username" name="username" value={credentials.username} onChange={change} placeholder="Enter your username" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={change} placeholder="Enter your email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={change} placeholder="Enter your password" require />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" className="form-control" id="location" name="location" value={credentials.location} onChange={change} placeholder="Enter your location" required />
                        </div>

                        <div className="d-grid mb-3">
                            <button type="submit" className="btn btn-info w-100">Submit</button>
                        </div>

                        <div className="d-grid">
                            <Link to="/api/auth/login" className="btn btn-danger w-100">Already a user?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
