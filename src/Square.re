open SquareValue;

[@react.component]
let make = (~value, ~onClick) => {
    <button className="square" onClick={_ => onClick()}>
        {ReasonReact.string(squareValueString(value))}
    </button>
}