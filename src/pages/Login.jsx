import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // synthetic event
    const res = await fetch(`https://food-delivery-app-backend-85ht.onrender.com/api/auth/login`, {
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
    <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={change} placeholder="Enter your email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={change} placeholder="Enter your password" required />
        </div>

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-info w-100">Submit</button>
        </div>

        <div className="d-grid">
          <Link to="/api/auth/register" className="btn btn-danger w-100">Don't have an Account?</Link>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
