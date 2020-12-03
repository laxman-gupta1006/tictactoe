import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import './style/root.css';
import calculateWinner from './winner';
const App = () => {

  const [xturn, setXturn] = useState(
    [true, false][Math.floor(Math.random() * (1 - 0 + 1)) + 0]
  );
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      xturn: xturn,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Playing for ${xturn ? 'X' : '0'}`;
  const handleclick = position => {
    if (current.board[position] || winner || (history.length-1)!=currentMove) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (square === null) {
          if (pos === position) {
            let turn = last.xturn ? 'X' : '0';
            return turn;
          }
        }
        return square;
      });
      return prev.concat({ board: newBoard, xturn: !last.xturn });
    });
    setCurrentMove(prev=>prev+1);
  };
 const moveTo = (move) => setCurrentMove(move);
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h3>{message}</h3>
      <Board board={current.board} handleclick={handleclick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
};
export default App;
