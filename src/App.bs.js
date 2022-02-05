'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Square$TictactoeReason = require("./Square.bs.js");

function App(Props) {
  var match = React.useState(function () {
        return Caml_array.caml_make_vect(9, "");
      });
  var setSquares = match[1];
  var squares = match[0];
  var renderSquare = function (i) {
    return React.createElement(Square$TictactoeReason.make, {
                value: Caml_array.get(squares, i),
                onClick: (function (param) {
                    var newSquares = $$Array.copy(squares);
                    Caml_array.set(newSquares, i, "X");
                    return Curry._1(setSquares, (function (param) {
                                  return newSquares;
                                }));
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

var make = App;

exports.make = make;
/* react Not a pure module */
