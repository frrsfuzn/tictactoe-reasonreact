'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function squareValueString(value) {
  switch (value) {
    case /* Cross */0 :
        return "X";
    case /* Circle */1 :
        return "O";
    case /* Empty */2 :
        return "";
    
  }
}

function Square(Props) {
  var value = Props.value;
  var onClick = Props.onClick;
  return React.createElement("button", {
              className: "square",
              onClick: (function (param) {
                  return Curry._1(onClick, undefined);
                })
            }, squareValueString(value));
}

var make = Square;

exports.squareValueString = squareValueString;
exports.make = make;
/* react Not a pure module */
