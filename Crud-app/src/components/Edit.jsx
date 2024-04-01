import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './userSlice';

const Edit = () => {
    const navigate =useNavigate();
    const{ id } =useParams();
    const users =useSelector(state =>state.users);
    const existUser =users.filter(f => f.id == id);
    const{name, email} =existUser[0];

    const[newName, setNewName] =useState(name);
    const[newEmail, setNewEmail] =useState(email);
    const dispatch =useDispatch();

    const handleEdit= (e) =>{
        e.preventDefault();
        dispatch(editUser({
            id: id,
            name: newName,
            email: newEmail
        }))
        navigate('/');
    }

  return (
    <div className='edit'> 
    <div className='edit-form'>
        <h1 >Edit User</h1>
        <form onSubmit={handleEdit}>
            {/* <div className='edit-inp'> */}
                <label className='edit-name' htmlFor="name">Name :</label>
                <input type="text" className='edit-inp' value={newName} onChange={(e) =>setNewName(e.target.value)}/>
            
                <label className='edit-name' htmlFor="email">Email: </label>
                <input className='edit-inp' type="email" value={newEmail} onChange={(e) =>setNewEmail(e.target.value)}/>
            <br />
            <button className='update'>update</button>
        </form>
        </div>
    </div>
    
  )
}

export default Edit;