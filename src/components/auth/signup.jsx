import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../../config';

export function SignUp(){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return <div className='auth-screen'>
          <div className='auth-card-signup'>
            <div className='header'>
              <header>Sign Up</header>
              <p>Enter your information to create your account</p>
            </div>

            <div className='input-section'>
              <div>
                <div>First Name</div>
                <input type="text" placeholder='Rahul' onChange={(e)=>{
                      setFirstName(e.target.value)
                }} />
              </div>
              <div>
                <div>Last Name</div>
                <input type="text"  placeholder='Tripathi' onChange={(e)=>{
                      setLastName(e.target.value)
                }} />
              </div>
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
                }}/>
              </div>
            </div>

            <div className='submit-btn' onClick={async ()=>{
               await axios.post(`${backendUrl}/user/sign-up`, {
                  userName,
                  password,
                  firstName,
                  lastName,
              });
              navigate("/sign-in")
            }}>Sign Up</div>

            <div className='footer'>
              <footer>Already have an account? <span onClick={()=>{
                navigate('/sign-in')
              }}>Login</span></footer>
            </div>
          </div>
  </div>
}