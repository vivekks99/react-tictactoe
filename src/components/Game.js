import React, { useState } from 'react'
import Square from './Square'

function Game() {
  const [isPlayerOne, setisPlayerOne] = useState(true);
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));

  function checkWinner(){
    const possibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      
      for (let moves of possibilities) {
        const [a, b, c] = moves;
        if (squareValue[a] !== null && squareValue[a] === squareValue[b] && squareValue[a] === squareValue[c]) {
          return squareValue[a];
        }
      }

    return false;
  }

  function checkTie(){
    for(let val of squareValue){
        if(val === null) return false;
    }
    return true;
  }

  const winner = checkWinner();
  const tie = checkTie();

  function handleSquareClick(i){
    if(squareValue[i] !== null) return;
    const newArr = [...squareValue];
    newArr[i] = isPlayerOne ? 'X' : 'O';
    setSquareValue(newArr);
    setisPlayerOne(p => !p);
  }

  function handleStartOver(){
    setisPlayerOne(true);
    setSquareValue(Array(9).fill(null));
    checkWinner();
    checkTie();
  }

  return (
    <>
        <div className="title">Tic Tac Toe</div>
        {winner ? <div className='exit-message'>{winner === 'X' ? "Player 1" : "Player 2"}  has won the game</div> :
        tie ? <div className='exit-message'>Match Tie</div> :
        <><div className="player">{`${isPlayerOne ? "Player 1's Move" : "Player 2's Move"}`}</div>
        <div className="game-board">
            <div className="board-row">
                <Square onSquareClick={() => handleSquareClick(0)} data={squareValue[0]} />
                <Square onSquareClick={() => handleSquareClick(1)} data={squareValue[1]} />
                <Square onSquareClick={() => handleSquareClick(2)} data={squareValue[2]} />
            </div>
            <div className="board-row">
                <Square onSquareClick={() => handleSquareClick(3)} data={squareValue[3]} />
                <Square onSquareClick={() => handleSquareClick(4)} data={squareValue[4]} />
                <Square onSquareClick={() => handleSquareClick(5)} data={squareValue[5]} />
            </div>
            <div className="board-row">
                <Square onSquareClick={() => handleSquareClick(6)} data={squareValue[6]} />
                <Square onSquareClick={() => handleSquareClick(7)} data={squareValue[7]} />
                <Square onSquareClick={() => handleSquareClick(8)} data={squareValue[8]} />
            </div>
        </div></>}
        <div className="over">
            <button onClick={() => handleStartOver()}>Start Over</button>
        </div>
    </>
  )
}

export default Game