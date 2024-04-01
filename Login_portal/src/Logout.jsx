import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './components/features';


const Logout = () => {
  const user =useSelector(selectUser);
  const dispatch =useDispatch();
  const handleLogout =(e) =>{
    e.preventDefault();
    dispatch(logout());
  } 
  return (
    <div className='logout'>
        <h1>Hello <span className='logout-name'>{user.name}</span></h1>
        <button onClick={(e) =>handleLogout(e)}>logout</button>
    </div>
  )
}

export default Logout;