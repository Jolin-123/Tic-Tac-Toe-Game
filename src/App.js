//09/09/2024
// Tic-Tac-Toe Game

import { useState } from 'react';

// export default function Square({ value }) {
//   return ( 
//   <>
//   <div> 
//   <button className="square">value</button>
//   <button className="square">value</button> 
//   <button className="square">value</button> 
//   </div>
//   <div> 
//   <button className="square">{ value }</button>
//   <button className="square">{ value }</button> 
//   <button className="square">{ value }</button> 
//   </div>
//   <div> 
//   <button className="square">X</button>
//   <button className="square">X</button> 
//   <button className="square">X</button> 
//   </div>
//  </>
//  );
// }


// function Square() {
//   const [value, setValue] = useState(null);

//   function handleClick() {
//     setValue('X');
//   }

//   return (
//     <button
//       className="square"
//       onClick={handleClick}
//     >
//       {value}
//     </button>
//   );
// }

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {

    // last part add this, return and stop the game after helper function's result #3
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    
    if (xIsNext)
    {
      nextSquares[i] = "X"
    }
    else {
      nextSquares[i] = "O"
    }
  
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

   // last part add this using helper function #2
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }


  return (
    <>
    <div className="status">{status}</div>
    <div className="square_board"> 
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      </div>
    </>
  );
}


// last part add this , adding helper function first #1
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

