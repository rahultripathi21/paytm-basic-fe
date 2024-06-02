import { useNavigate, useSearchParams } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config';

export function Transfer(){
  
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const userName = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();



  async function transfer(){
    await axios.post(`${backendUrl}/accounts/transfer`,{
      "to": id,
      "amount": amount
    },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });

    navigate('/dashboard')
  }

  return <div className='transfer'>
    <div className='tansfer-screen'>
      <h2>Send Money</h2>
      <div className='sub-heading'>
        <span>{userName[0]}</span>
        <div>{userName}</div>
      </div>
      <div className='balance'>Amount (in Rs)</div>
      <input type="text" placeholder='Enter amount' onChange={(e)=>{
        setAmount(e.target.value );
      }}/>
      <button onClick={transfer}>Initiate Transfer</button>
    </div>
  </div>
}