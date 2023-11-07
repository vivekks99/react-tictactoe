import React from 'react'

function Square({onSquareClick, data}) {
  return (
    <div className='square' onClick={onSquareClick}>{data}</div>
  )
}

export default Square