'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Board$TictactoeReason = require("./Board.bs.js");

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
        return [Caml_array.caml_make_vect(9, " ")];
      });
  var setHistory = match[1];
  var history = match[0];
  var match$1 = React.useState(function () {
        return true;
      });
  var setXIsNext = match$1[1];
  var xIsNext = match$1[0];
  var handleClick = function (i) {
    var current = Caml_array.get(history, history.length - 1 | 0);
    var squares = $$Array.copy(current);
    if (calculateWinner(squares) === " " && Caml_array.get(squares, i) === " ") {
      Caml_array.set(squares, i, xIsNext ? "X" : "O");
      Curry._1(setHistory, (function (prev) {
              return $$Array.append(prev, [squares]);
            }));
      return Curry._1(setXIsNext, (function (prev) {
                    return !prev;
                  }));
    }
    
  };
  var current = Caml_array.get(history, history.length - 1 | 0);
  var winner = calculateWinner(current);
  var nextPlayer = xIsNext ? "X" : "O";
  var status = winner === " " ? "Next Player: " + nextPlayer : "Winner: " + winner;
  var moves = $$Array.mapi((function (i, e) {
          var desc = i === 0 ? "Go to game start" : "Go to move #" + String(i);
          return React.createElement("li", {
                      key: String(i)
                    }, React.createElement("button", undefined, desc));
        }), history);
  return React.createElement(React.Fragment, undefined, React.createElement("p", undefined, status), React.createElement(Board$TictactoeReason.make, {
                  squares: current,
                  changeSquare: handleClick
                }), React.createElement("ol", undefined, moves));
}

var make = App;

exports.calculateWinner = calculateWinner;
exports.make = make;
/* react Not a pure module */
