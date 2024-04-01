import React, { useReducer } from 'react'
import { AddList } from './AddList'
import { TaskList } from './TaskList'


const reducer =(state, action) =>{
    switch(action.type){
        case 'ADD_TODO' :
            return [...state, { id : Date.now(), text : action.payload}]
        case 'DELETE_TODO' :
            return state.filter(ele => ele.id !== action.payload)
        case 'EDIT_TODO' :
            return state.map(ele => ele.id === action.item.id ? action.item : ele)
    }
}

export const Using_Rudecer = () => {
    const[todos, dispatch] =useReducer(reducer, []);

    const handleAdd =(text) =>{
        dispatch({
            type : 'ADD_TODO',
            payload : text ,
        })
    }
    const handleDelete =(itemID) =>{
        dispatch({
            type : 'DELETE_TODO',
            payload : itemID,
        })
    }
    const handleEdit =(item) =>{
        dispatch({
            type : 'EDIT_TODO',
            item : item,
        })
    }
  return (
    <div className='main-cmp'>
        <h1>My TO-DO Lists</h1>
        <AddList onAdd ={handleAdd} />
        <TaskList todos={todos} onDelete ={handleDelete} onEdit ={handleEdit}/>
    </div>
  )
}
