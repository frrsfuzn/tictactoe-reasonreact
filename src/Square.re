[@react.component]

let make = (~value) => 
    <button className="square">
        {ReasonReact.string(value)}
    </button>