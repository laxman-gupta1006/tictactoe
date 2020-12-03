import React from 'react'

function Square({value ,handleclick}) {
   return (
         <button type="button" className="square" onClick={()=>handleclick()}>{value}</button>
   )
}

export default Square
