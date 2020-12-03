import React from 'react'

function Square({value ,handleclick,isWinningsq}) {
   return (
         <button type="button" className="square" onClick={()=>handleclick()} style={{
            fontWeight: isWinningsq ? 'bold':'normal',
            color:value==='X'? '#ffc72a':'#12e177',
            textShadow: isWinningsq ? value==='X' ? '0.8px 1.8px 5px #ffc72a':'0.8px 1.8px 5px #12e177':'none',
         }}>{value}</button>
   )
}

export default Square
