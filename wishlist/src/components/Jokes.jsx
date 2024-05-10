import React from "react"; 
const Jokes = ({id, text, like, onDelete, onLike, onDisLike }) => {

const handleLikes =() =>{
    onLike(id);
}
const handleDisLikes =() =>{
    onDisLike(id);
}

    return (
        <div className="list-items" key={id}>
          <h4>{text}</h4>
          <h3>Likes : {like} </h3>
          <button onClick={handleLikes}>👍</button>
          <button onClick={handleDisLikes} >👎</button>
          <button onClick={() =>onDelete(id)}>Delete</button>
        </div>
      )
};

export default Jokes;
