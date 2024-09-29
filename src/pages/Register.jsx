import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({username:"",email:"",password:"",location:""})

    const handleSubmit = async(e) =>{
        e.preventDefault(); // synthetic event
        const res = await fetch(`http://localhost:5000/api/auth/register`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username:credentials.username, email:credentials.email, password:credentials.password, location:credentials.location})
        });

        const json = await res.json();
        console.log(json);

        if(!json.success)
            alert("Enter valid credentials");
        else
            navigate('/api/auth/login');
    }

    const change = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input type="text" className="form-control" name='username' value={credentials.username} onChange={change} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={change} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={change} />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" name='location' value={credentials.location} onChange={change} />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
                <Link to="/api/auth/login" className="m-3 btn btn-danger">Already a user?</Link>
            </form>
        </div>

    )
}
