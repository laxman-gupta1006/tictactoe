import React from 'react';

const History = ({ history, moveTo,currentMove }) => {
  return (
     <div className="history-wrapper">
    <ul className="history">
      {history.map((_, move) => (
        <li key={move}>
          <button
            type="button"
            style={{
               fontWeight: move ===currentMove ? "bold":"normal",
            }}
            onClick={() => {
              moveTo(move);
            }}
            className={`btn-move ${move===currentMove ? 'active' :''}`}
          >
            {move === 0 ? `Start Game` : `Go to move ${move}`}
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
};
export default History;
