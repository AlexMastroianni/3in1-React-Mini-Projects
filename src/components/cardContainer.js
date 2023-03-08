import React from 'react';
import ToDoCard from './ToDO/ToDoCard';
import CalculatorCard from './Calculator/CalculatorCard';
import TicTacToeCard from './TicTacTo/TicTacToeCard';
const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="tile is-ancestor p-5 ">
        <ToDoCard />
        <CalculatorCard />
        <TicTacToeCard />
      </div>
    </div>
  );
};

export default CardContainer;
