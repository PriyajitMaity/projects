import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Log = () => {
    const { register, handleSubmit, formState:{ errors, isSubmitting } } =useForm();
    const [user, setUser] =useState('');

    const onSubmit =async(data) =>{
      try{
        let r =await axios.post('http://localhost:3000/api/auth/', data);
        let res =r.data
        setUser(res);
        console.log(data,  res);
      }catch(error){
        console.log('Error : ', error);
      }
    }
  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user">
            <input className="user-inp" {...register("username", {minLength: { value: 5, message: '*username must have a 5 letters' }, maxLength: { value: 20, message: 'your name reached maximum limit' } })} required />
            <label className="label-name" htmlFor="username">Enter your name </label>
            <span>{errors.username && errors.username.message}</span>

        </div>
        <div className="pass">
            <input className="pass-inp" type="password" {...register("password", {minLength: { value: 8, message: '**password must be 8 characters' }})} required />
            <label className="label-pass" htmlFor="password">Enter your password </label>
        </div>
        <span>{errors.password && errors.password.message}</span>
        <button  type="submit" disabled={isSubmitting}>submit</button>
    </form>
    { user && <h1>Hello { user }</h1> }
  </>
};

export default Log;
