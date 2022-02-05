switch(ReactDOM.querySelector("#root")) {
  | Some(root) => ReactDOM.render(<Greeting name="Fauzan"/>, root)
  | None => ()
}