import { useState } from "react"

export default function Single_Input() {
  const[list, setList] =useState([]);
  const[text, setText] =useState();

  const handleAdd =() =>{
    setList([...list, text]);
    setText('');
  }
  const handleDelete =(index) =>{
    setList([...list].filter((ele, i) => i!== index))
  }

  return (
    <div>
      <input type="text" onChange={e =>setText(e.target.value)} value={text}/>
      <button onClick={handleAdd}>Add</button>
      {
        list.map((item, index) =>{
          return <>
          <li key ={index}>
            {item}
            <button onClick={()=>handleDelete(index)}>delete</button>
          </li>
          </>
        })
      }
    </div>
  )
}
