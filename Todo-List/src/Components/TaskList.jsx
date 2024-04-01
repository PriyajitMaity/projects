import React, { useState } from 'react'

export const TaskList = ({todos, onDelete, onEdit}) => {
  return (
    <div className='tasklist'>
        {
            todos.map((item) =>(
                <li key={item.id} style={{listStyle :'none'}}>
                    <Task item ={item} onDelete ={onDelete} onEdit ={onEdit}/>                    
                </li>
           
            ))
        }
    </div>
  )
}
const Task =({item, onDelete, onEdit}) =>{
    const[isEdit, setIsEdit] =useState(false);
    return (
        <div className='todo-items'>
            <input type="checkbox"/>
        {
            isEdit ? (
                <>
                    <input className='inp-txt' type="text" value={item.text} onChange={(e) =>onEdit({...item, text : e.target.value})} />
                    <button onClick={() =>setIsEdit(false)} className='btn-save'>save</button>
                </>
            ) : (
                < >
                   <p>{item.text}</p>
                    <button className='btn-edit' onClick={() =>setIsEdit(true)}>edit</button>
                </>
            )
        }
            <button className='btn-delete' onClick={() =>onDelete(item.id)}>delete</button>
            
        </div>
    )
}