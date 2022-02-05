'use strict';

var React = require("react");

function Square(Props) {
  return React.createElement("button", {
              className: "square"
            }, "X");
}

var make = Square;

exports.make = make;
/* react Not a pure module */
