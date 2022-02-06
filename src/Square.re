open SquareValue;
let squareValueString = (value): string => {
  switch(value){
    | Cross => "X"
    | Circle => "O"
    | Empty => ""
  };
};
[@react.component]
let make = (~value, ~onClick) => {
    <button className="square" onClick={_ => onClick()}>
        {ReasonReact.string(squareValueString(value))}
    </button>
}