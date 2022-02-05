[@react.component]

let make = (~value: string, ~onClick) => {
    <button className="square" onClick={_ => onClick()}>
        {ReasonReact.string(value)}
    </button>
}