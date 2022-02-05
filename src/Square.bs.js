'use strict';

var React = require("react");

function Square(Props) {
  var value = Props.value;
  return React.createElement("button", {
              className: "square"
            }, value);
}

var make = Square;

exports.make = make;
/* react Not a pure module */
