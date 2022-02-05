'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Square$TictactoeReason = require("./Square.bs.js");

function calculateWinner(squares) {
  var lines = [
    [
      0,
      1,
      2
    ],
    [
      3,
      4,
      5
    ],
    [
      6,
      7,
      8
    ],
    [
      0,
      3,
      6
    ],
    [
      1,
      4,
      7
    ],
    [
      2,
      5,
      8
    ],
    [
      0,
      4,
      8
    ],
    [
      2,
      4,
      6
    ]
  ];
  var $$break = false;
  var index = 0;
  var winner = " ";
  while(!$$break && index < lines.length) {
    var match = Caml_array.get(lines, index);
    var a = match[0];
    if (Caml_array.get(squares, a) !== " " && Caml_array.get(squares, a) === Caml_array.get(squares, match[1]) && Caml_array.get(squares, a) === Caml_array.get(squares, match[2])) {
      winner = Caml_array.get(squares, a);
      $$break = true;
    } else {
      winner = " ";
      index = index + 1 | 0;
    }
  };
  return winner;
}

function App(Props) {
  var match = React.useState(function () {
        return Caml_array.caml_make_vect(9, " ");
      });
  var setSquares = match[1];
  var squares = match[0];
  var match$1 = React.useState(function () {
        return "X";
      });
  var setPlayer = match$1[1];
  var player = match$1[0];
  var renderSquare = function (i) {
    return React.createElement(Square$TictactoeReason.make, {
                value: Caml_array.get(squares, i),
                onClick: (function (param) {
                    if (!(calculateWinner(squares) === " " && Caml_array.get(squares, i) === " ")) {
                      return ;
                    }
                    var newSquares = $$Array.copy(squares);
                    Caml_array.set(newSquares, i, player);
                    Curry._1(setSquares, (function (param) {
                            return newSquares;
                          }));
                    return Curry._1(setPlayer, (function (prev) {
                                  if (prev === "X") {
                                    return "O";
                                  } else {
                                    return "X";
                                  }
                                }));
                  })
              });
  };
  var winner = calculateWinner(squares);
  console.log(winner === " ");
  var status = winner === " " ? "Next Player: " + player : "Winner: " + winner;
  return React.createElement(React.Fragment, undefined, React.createElement("p", undefined, status), React.createElement("div", {
                  className: "board-row"
                }, renderSquare(0), renderSquare(1), renderSquare(2)), React.createElement("div", {
                  className: "board-row"
                }, renderSquare(3), renderSquare(4), renderSquare(5)), React.createElement("div", {
                  className: "board-row"
                }, renderSquare(6), renderSquare(7), renderSquare(8)));
}

var make = App;

exports.calculateWinner = calculateWinner;
exports.make = make;
/* react Not a pure module */
