import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmission = (event) => {
    event.preventDefault();
    // Add your login logic here
    alert('Login Successful!');
    navigate('/dashboard'); // Use navigate to redirect to the admin dashboard
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleFormSubmission}>
        <h1>Admin</h1>
        <div className="input-box">
          <input 
            type="text" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <input type="checkbox" id="signupCheck" />
          <label htmlFor="signupCheck">Remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
