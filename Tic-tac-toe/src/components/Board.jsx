import { useState } from "react";
import Box from "./Box";

export default function Board() {
    const[box, setBox] =useState(Array(9).fill(null));
    const[xTurn, setXTurn] =useState(true);

    const handleReset =() =>{
        setBox(Array(9).fill(null));
    }
    
    const handleClick =(index) =>{
        const copyBox =[...box];
        if(box[index] !== null){
            return;
        }
        copyBox[index] =xTurn ? 'X' : 'O';
        setBox(copyBox);
        setXTurn(!xTurn);
    }
    const checkWinner =() =>{
        const winner =[
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ]
        for(let i of winner){
            const[a, b, c] =i;
            if(box[a] ===box[b] && box[a] ===box[c] && box[a] !== null){
                return box[a];
            }
        }
        return false;
    }
    const isWinner =checkWinner();

  return (
    <div className="container">
        
        <div className="title">
            <h1 className="header">Tic-Tac-Toe Game in <span> React </span></h1>
        </div>

        <div>
            <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
                
            {
                isWinner ? (
                    <h1 style={{fontSize:'70px', color: 'pink'}}>Congratulations {isWinner} </h1>
                ) : (
            <div className="Board">
            <div className="box-coloumn">
                <Box value={box[0]} onClick={() =>handleClick(0)}/>
                <Box value={box[1]} onClick={() =>handleClick(1)}/>
                <Box value={box[2]} onClick={() =>handleClick(2)}/>
            </div>
            <div className="box-coloumn">
                <Box value={box[3]} onClick={() =>handleClick(3)}/>
                <Box value={box[4]} onClick={() =>handleClick(4)}/>
                <Box value={box[5]} onClick={() =>handleClick(5)}/>
            </div>
            <div className="box-coloumn">
                <Box value={box[6]} onClick={() =>handleClick(6)}/>
                <Box value={box[7]} onClick={() =>handleClick(7)}/>
                <Box value={box[8]} onClick={() =>handleClick(8)}/>
            </div>
                </div>
                )
            }
        
    </div>
  )
}
