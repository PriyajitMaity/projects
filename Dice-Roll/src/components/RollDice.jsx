import React, { useState, useEffect } from 'react';
import './RollDice.css';
import Dice from './Dice';

function RollDice() {
  // Props with default sides
  const defaultSides = ['one', 'two', 'three', 'four', 'five', 'six'];
  const [sides, setSides] = useState(defaultSides);

  // State variables
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  // Roll dice function
  // const roll = () => {
  //   setDie1(sides[Math.floor(Math.random() * sides.length)]);
  //   setDie2(sides[Math.floor(Math.random() * sides.length)]);
  //   setRolling(true);
  //   // Timer for rolling animation
  //   setTimeout(() => setRolling(false), 1000);
  // };
  const roll = () => {
    const index1 = Math.floor(Math.random() * sides.length);
    const index2 = Math.floor(Math.random() * sides.length);
  
    setDie1(sides[index1]);
    setDie2(sides[index2]);
    setRolling(true);
  
    // Timer for rolling animation
    setTimeout(() => setRolling(false), 1000);
  };
  // Calculate the total value of die1 and die2
const totalValue = sides.indexOf(die1) + 1 + sides.indexOf(die2) + 1;
console.log('Total Value:', totalValue);

  // Render component
  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Dice face={die1} rolling={rolling} />
        <Dice face={die2} rolling={rolling} />
      </div>
      <button
        className={rolling ? 'RollDice-rolling' : ''}
        disabled={rolling}
        onClick={roll}
      >
        {rolling ? 'Rolling' : 'Roll Dice!'}
      </button>
      <h2>Total Count : {totalValue}</h2>
    </div>
  );
}

export default RollDice;
