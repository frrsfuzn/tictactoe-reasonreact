let calculateWinner = squares => {
  let lines = [|
    (0, 1, 2),
    (3, 4, 5),
    (6, 7, 8),
    (0, 3, 6),
    (1, 4, 7),
    (2, 5, 8),
    (0, 4, 8),
    (2, 4, 6),
  |];
  let break = ref(false);
  let index = ref(0);
  let winner = ref(" ")
  while (! break^ && index^ < Array.length(lines)) {
    let (a,b,c) = lines[index^];
    if (squares[a] !== " " && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner := squares[a]
      break := true;
    } else {
      winner:= " "
      index := index^ + 1;
    };
  };
  let result = winner^
  result
};

[@react.component]
let make = () => {
  let (squares, setSquares) = React.useState(_ => Array.make(9, " "));
  let (player, setPlayer) = React.useState(_ => "X");
  let handleClick = i => {
    let newSquares = Array.copy(squares);
    newSquares[i] = player;
    setSquares(_ => newSquares);
    setPlayer(prev => prev === "X" ? "O" : "X");
  };

  let renderSquare = i => {
    <Square value={Array.get(squares, i)} onClick={() => handleClick(i)} />;
  };
  let winner = calculateWinner(squares);
  Js.log(winner == " ")
  let status = winner == " " ? "Next Player: " ++ player : "Winner: " ++ winner;
  <>
    <p> {ReasonReact.string(status)} </p>
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
  </>;
};
