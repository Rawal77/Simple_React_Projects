import "./TicTacToe.css";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function TicTacToe() {
  return (
    <div className="container">
      <div className="row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  );
}
