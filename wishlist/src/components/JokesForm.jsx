 import React from "react";
import { useState } from "react";
 
 const JokesForm = ({onAddJoke}) => {    
    const [text, setText] =useState('');
    const [error, setError] =useState('');

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(text.length < 5){
            setError('Entered joke must be atleast 5 characters long');
            return;
        }
        onAddJoke(text)
        setText('')
    }

    let renderError =null;
        if(error){
            renderError =<p>{error}</p>
        }

   return (    
    <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) =>setText(e.target.value)}/>
        {renderError}
        <button>Add Joke</button>
    </form>
 );
 };
 
 export default JokesForm;
 