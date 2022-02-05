'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Square(Props) {
  var value = Props.value;
  var onClick = Props.onClick;
  return React.createElement("button", {
              className: "square",
              onClick: (function (param) {
                  return Curry._1(onClick, undefined);
                })
            }, value);
}

var make = Square;

exports.make = make;
/* react Not a pure module */
