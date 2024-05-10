import React from "react";
import Jokes from "./components/Jokes";
import { useState } from "react";
import JokesForm from "./components/JokesForm";

const App = () => {
  const [jokes, setJokes] =useState([
    {
    id: 1,
    text : "I'm afraid for the calender, Its days are numbered.",
    like: 0
  },
  {
    id: 2,
    text: "I used to be addicted to soap, but I'm clean now.",
    like: 0
  }
]);

const handleAddJokes =(text) =>{
  const joke ={
    text, 
    id : Math.random()*1000,
    like: 0,
  }
  setJokes([joke, ...jokes]);
  console.log(joke);
}

const handleLike =(id) =>{
  setJokes(jokes.map(ele =>{
    if(ele.id ===id){
      return{...ele, like :ele.like +1}
    }else{
      return ele
    }
  }))
}

const handleDisLike =(id) =>{
  setJokes(jokes.map(ele =>{
    if(ele.id ===id){
      return{...ele, like :ele.like -1}
    }else{
      return ele
    }
  }))
  
}
const handleDelete =(id) =>{
  console.log('delete id ', id);
  setJokes(jokes.filter(joke =>joke.id !== id));
}
const handleSort =() =>{
  setJokes([...jokes].sort((a, b) =>b.like -a.like))
}


  return (
    <main>
      <h1>Jokes Forum</h1>
            <button onClick={handleSort} >Sort</button>
           <JokesForm onAddJoke ={handleAddJokes} />
            {
              jokes.map((item) =>(
                
                  <Jokes key={item.id} onDelete={handleDelete} onLike ={handleLike} onDisLike ={handleDisLike} {...item} />
              ))
            }
        </main>
  );
};

export default App;
