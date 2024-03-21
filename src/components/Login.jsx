
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import myVideo from '../assets/mainn1.mp4'
import { Button, TextField } from '@mui/material';
import axios from 'axios';
function Register() {
  const [password, setPassword] = useState();
  const [email, setEmail]=useState();
  const navigate= useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:3000/login`,{email,password})
    .then(result=>{console.log(result)
    if(result.data==="Success"){
     
      navigate('/home')
    }
    else{
      alert("Password incorrect")
    }
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
          <h2 className=' d-flex justify-content-center'>Login</h2>
          <form onSubmit={handleLogin}>
            <TextField
              label=" Email"
              id='email'
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
            Login
            </Button>
          </form>
          <br />
          <p>Don't have an Account?<a href="/register">Click here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register