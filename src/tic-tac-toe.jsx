import { useState } from "react";
import "./TicTacToe.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXTurn] = useState(true);
  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    cpySquares[getCurrentSquare] = isXturn ? "X" : "0";
    setIsXTurn(!isXturn);
    setSquares(cpySquares);
  }
  return (
    <div className="container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onClick={() => handleClick(2)}></Square>
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onClick={() => handleClick(5)}></Square>
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onClick={() => handleClick(8)}></Square>
      </div>
    </div>
  );
}
