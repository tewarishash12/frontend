import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // synthetic event
    const res = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await res.json();
    console.log(json);

    if (!json.success)
      alert("Enter valid credentials");

    if(json.success){
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate('/');
    }
  }

  const change = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={change} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={change} />
        </div>
        <button type="submit" className="btn btn-info">Submit</button>
        <Link to="/api/auth/register" className="m-3 btn btn-danger">Don't have an Account?</Link>

      </form>
    </div>
  )
}
