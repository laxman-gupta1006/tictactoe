import React from 'react';

const History = ({ history, moveTo,currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => (
        <li key={move}>
          <button
            type="button"
            style={{
               fontWeight: move ===currentMove ? "bold":"normal"
            }}
            onClick={() => {
              moveTo(move);
            }}
          >
            {move === 0 ? `Start Game` : `Go to move ${move}`}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default History;
