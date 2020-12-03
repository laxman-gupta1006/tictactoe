import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xturn,setXturn] = useState([true,false][Math.floor(Math.random() * (1 - 0 + 1) ) + 0])


  const handleclick = position => {
   console.log()
   setBoard( 
      prev =>{
         return prev.map(
            (square,pos) =>{
               if(square==null){
               if(pos===position){
                  let turn= xturn ? 'X':'0';
                  setXturn(!xturn)
                  return turn;
               }
            }
            return square;
            }
         )
      }
   )
  }

  const rendersquare = position => {
    return (
      <Square value={board[position]} handleclick={() => handleclick(position)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};

export default Board;
