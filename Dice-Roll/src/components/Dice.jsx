import React from 'react';
import './Dice.css';
function Dice({ face, rolling }) {
  // No state needed for Die component
 
  return (
    <div>
        <i className={`Dice ${rolling && 'Dice-shaking'} fas fa-dice-${face}`}></i>
    </div>
  );
}

export default Dice;

