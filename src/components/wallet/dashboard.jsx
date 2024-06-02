import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../../config';

export function Dashboard(){

  const [balance, setBalance] = useState(0);
  const [userName, setUsername] = useState(0);
  const [filter, setFilter] = useState("");
  const [usersInfo, setUsersInfo] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  useEffect(()=>{
     async function  setBalanceValue(){
      const balanceReponse = await axios.get(`${backendUrl}/accounts/balance`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const userResponse = await axios.get(`${backendUrl}/user`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const usersInfoResponse = await axios.get(`${backendUrl}/user/bulk?filter`+filter,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      setBalance(balanceReponse.data.balance);
      setUsername(userResponse.data.userData.firstName)
      setUsersInfo(usersInfoResponse.data.users)
    }
    setBalanceValue();
  },[balance, filter])



  return <div className='dashboard'>
    <header className='dashboard-header'>
      <div>Payments App</div>
      <div>
        <div>Hello, User</div>
        <span>U</span>
      </div>
      
    </header>
    <div className='user-balance'>Your balance {balance}</div>
    <div className='transaction-data'>
      <h4>{userName}</h4>
      <input type="text" placeholder='Search users...' onChange={(e)=>{
        setFilter(e.target.value);
      }} />
      
      {usersInfo.map((list, index) => {
            return (
              <div className='transaction-list' key={index}>
                <div>
                  <span>{list.firstName[0]}</span>
                  <span>{list.firstName}</span>
                </div>
                <button onClick={() => {
                  navigate(`/send?id=${list._id}&name=${list.firstName}`)
                }}>Send Money</button>
              </div>
            );
      })}

      
    </div>
  </div>
}