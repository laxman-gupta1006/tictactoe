import React,{useState} from "react";
import Board from "./components/Board";
import "./style/root.css"
import calculateWinner from "./winner";
const App=() => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(
    [true, false][Math.floor(Math.random() * (1 - 0 + 1)) + 0]
  );

  const winner = calculateWinner(board)
  const message = winner ? `Winner is ${winner}` : `Playing for ${xturn ? 'X':'0'}`
  const handleclick = position => {
    if(board[position] || winner){
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (square == null) {
          if (pos === position) {
            let turn = xturn ? 'X' : '0';
            return turn;
          }
        }
        return square;
      });
    });
    setXturn(!xturn);
  };

  return(
<div className="app">
  <h1>TIC TAC TOE</h1>
  <h3>{message}</h3>
  <Board
  board ={board}
  handleclick={handleclick}
  />
</div>)
};
export default App