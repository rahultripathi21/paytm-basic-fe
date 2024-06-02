import { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../../config';

export function SignIn(){
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return <div className='auth-screen'>
          <div className='auth-card-signin'>
            <div className='header'>
              <header>Sign In</header>
              <p>Enter your information to create your account</p>
            </div>

            <div className='input-section'>
              <div>
                <div>Email</div>
                <input type="text"  placeholder='rahul@gmail.com' onChange={(e)=>{
                  setUsername(e.target.value)
                }}/>
              </div>
              <div>
                <div>Password</div>
                <input type="text" placeholder='****' onChange={(e)=>{
                  setPassword(e.target.value)
                }} />
              </div>
            </div>

            <div className='submit-btn' onClick={async ()=>{
                const response = await axios.post(`${backendUrl}/user/sign-in`, {
                   userName,
                   password,
               });
               localStorage.setItem("token", response.data.token)
               navigate("/dashboard")

            }}>Sign In</div>

            <div className='footer'>
              <footer>Dont have an account? <span onClick={()=>{
                navigate('/sign-up')
              }}>Sign Up</span></footer>
            </div>
          </div>
  </div>
}