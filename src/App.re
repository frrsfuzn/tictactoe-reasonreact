[@react.component]
let make = () => {
  let (squares, setSquares) = React.useState(_ => Array.make(9, ""))
  let handleClick = (i) => {
    let newSquares = Array.copy(squares)
    newSquares[i] = "X";
    setSquares(_ => newSquares);
  }

  let renderSquare = (i) => {
    <Square value={squares[i]} onClick={() => handleClick(i)}  />
  };
  <>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </>
}