'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Square$TictactoeReason = require("./Square.bs.js");

function Board(Props) {
  var squares = Props.squares;
  var changeSquare = Props.changeSquare;
  var renderSquare = function (i) {
    return React.createElement(Square$TictactoeReason.make, {
                value: Caml_array.get(squares, i),
                onClick: (function (param) {
                    return Curry._1(changeSquare, i);
                  })
              });
  };
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "board-row"
                }, renderSquare(0), renderSquare(1), renderSquare(2)), React.createElement("div", {
                  className: "board-row"
                }, renderSquare(3), renderSquare(4), renderSquare(5)), React.createElement("div", {
                  className: "board-row"
                }, renderSquare(6), renderSquare(7), renderSquare(8)));
}

var make = Board;

exports.make = make;
/* react Not a pure module */
