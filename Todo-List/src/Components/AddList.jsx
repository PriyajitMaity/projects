import React, { useState } from 'react'

export const AddList = ({onAdd}) => {
    const[text, setText] =useState('');
  return (
    <div className='add-items'>
        <input className='add-inp' type="text" value={text} onChange={(e) =>setText(e.target.value)}/>
        <button className='add-btn' onClick={() =>{
            setText('');
            onAdd(text);
        }} >add task</button>     
    </div>
  )
}
