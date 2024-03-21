import React, { useState } from 'react';

import myVideo from '../assets/mainn1.mp4'
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {
  const [showForm, setShowForm] = useState(false);
  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div className='login-page'>
      <video autoPlay muted loop id='background-video' >
        <source src={myVideo} type='video/mp4' />
      </video>
      <div className="app">
        <Button variant="contained" color="primary" onClick={toggleForm} class='Button'>
          Get Started as a User
        </Button>
        {showForm && <LoginForm toggle={toggleForm} />}
      </div>
    </div>
  );
}

function LoginForm(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail]=useState();
  const navigate= useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    props.toggle();
    axios.post(`http://localhost:3000/register`, {username,email, password})
    .then(result=>{console.log(result);
      alert("Registration Successfull")
    navigate('/login')
    })
    .catch(err=>console.log(err))
  }

  
  
  return (
    <div className='login-page'>
      <video autoPlay muted loop id='background-video' >
        <source src={myVideo} type='video/mp4' />
      </video>
      <div className="popup">
        <div className="popup-inner">
          <h2 className=' d-flex justify-content-center'>Register</h2>
          <form onSubmit={handleLogin}>
          <TextField
              label="Username"
              type="text"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br />
            <TextField
            id='Email'
              label=" Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <Button type="submit" variant="contained" color="success" className='w-100 rounded-4'>
              Register
            </Button>
          </form>
          <br />
          <p>Akready have an Account?<a href="/login">Click here</a></p>

          <Button onClick={props.toggle} variant='contained' className='w-100 rounded-4' style={{ backgroundColor: 'red' }}>Close</Button>
        </div>
      </div>
    </div>
  );
}

export default Register;