import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { login } from './components/features';

const Login = () => {
    const dispatch =useDispatch();
    const[name, setName] =useState('');
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
   const handleSubmit =(e) =>{
    e.preventDefault();
    dispatch(login({
        name: name,
        email: email,
        password: password,
        loggedin: true
    }))
   }
   
  return (
    <div className='login'>
    <form className='login-form' onSubmit={(e) =>handleSubmit(e)} >
       <h1>Login</h1>
          <input  placeholder='Name' type="text" value={name} onChange={(e) =>setName(e.target.value)} />
          <input  placeholder='Email' type="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
          <input placeholder='Password' type="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
          <button>Login</button>
     </form>
   </div>
  )
}

export default Login;