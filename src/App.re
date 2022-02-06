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
  let winner = ref(" ");
  while (! break^ && index^ < Array.length(lines)) {
    let (a, b, c) = lines[index^];
    if (squares[a] !== " "
        && squares[a] === squares[b]
        && squares[a] === squares[c]) {
      winner := squares[a];
      break := true;
    } else {
      winner := " ";
      index := index^ + 1;
    };
  };
  let result = winner^;
  result;
};

[@react.component]
let make = () => {
  let (history, setHistory) = React.useState(_ => [|Array.make(9, " ")|]);
  let (step, setStep) = React.useState(_ => 0);
  let (xIsNext, setXIsNext) = React.useState(_ => true);
  let handleClick = i => {
    let current = history[Array.length(history) - 1];
    let squares = Array.copy(current);
    if (calculateWinner(squares) === " " && squares[i] === " ") {
      squares[i] = xIsNext ? "X" : "O";
      setHistory(prev => Array.append(prev, [|squares|]));
      setXIsNext(prev => !prev);
      setStep(_ => Array.length(history))
    };
  };

  let jumpTo = (step) => {
    setStep(_ => step);
    setXIsNext(_ => step mod 2 === 0)
  }

  let current = history[step];
  let winner = calculateWinner(current);
  let nextPlayer = xIsNext ? "X" : "O";
  let status =
    winner == " " ? "Next Player: " ++ nextPlayer : "Winner: " ++ winner;

  let moves = Array.mapi((i, e) => {
    let desc = i === 0 ? "Go to game start" : "Go to move #" ++ string_of_int(i);
    <li key={string_of_int(i)}>
      <button onClick={_ => jumpTo(i)}>{ReasonReact.string(desc)}</button>
    </li>
  }, history);
  <>
    <p> {ReasonReact.string(status)} </p>
    <Board squares=current changeSquare=handleClick />
    <ol>
      {React.array(moves)}
    </ol>
  </>;
};
