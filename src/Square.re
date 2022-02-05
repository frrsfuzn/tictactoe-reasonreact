[@react.component]

let make = (~value) => {
    let (value, setValue) = React.useState(_ => "");

    <button className="square" onClick={_ => setValue(_ => "X")}>
        {ReasonReact.string(value)}
    </button>
}