'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Greeting$TictactoeReason = require("./Greeting.bs.js");

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(Greeting$TictactoeReason.make, {
            name: "Fauzan"
          }), root);
}

/* root Not a pure module */
