'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Game$TictactoeReason = require("./Game.bs.js");

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(Game$TictactoeReason.make, {}), root);
}

/* root Not a pure module */
