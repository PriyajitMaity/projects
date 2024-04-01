import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userSlice';
import { useNavigate } from 'react-router-dom';

const AddList = () => {

    const[name, setName] =useState('');
    const[email, setEmail] =useState('');
    const dispatch =useDispatch();
    const users =useSelector(state =>state.users);
    const navigate =useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(addUser({id: users[users.length -1].id +1, name, email}))
        navigate('/');
    }

  return (
    <div className='edit'>
        <div className="edit-form">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label  className='edit-name' htmlFor="name">Name :</label>
                <input  className='edit-inp' type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
            </div>
            <div>
                <label  className='edit-name' htmlFor="email">Email: </label>
                <input  className='edit-inp' type="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            </div><br />
            <button className='update' >submit</button>
        </form>
        </div>
    </div> 
  )
}

export default AddList;