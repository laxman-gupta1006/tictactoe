import React from 'react';

const Status = ({ winner, current, currentMove }) => {
  return (
    <div className='status-message'>
      {winner && (
         <>
         Winner is <span className={winner==='X'?'text-orange':'text-green'}>{winner}</span>
         </>
      )}
      {!winner && currentMove!=9 && (
         <>
         Playing for <span className={current.xturn ?'text-orange':'text-green'}>{current.xturn ? 'X' : '0'}</span>
         </>
         )}
      {!winner && currentMove===9 && `Match Draw`}
    </div>
  );
};
export default Status;
