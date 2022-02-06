'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Board$TictactoeReason = require("./Board.bs.js");

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
  var winner = /* Empty */2;
  while(!$$break && index < lines.length) {
    var match = Caml_array.get(lines, index);
    var a = match[0];
    if (Caml_array.get(squares, a) !== /* Empty */2 && Caml_array.get(squares, a) === Caml_array.get(squares, match[1]) && Caml_array.get(squares, a) === Caml_array.get(squares, match[2])) {
      winner = Caml_array.get(squares, a);
      $$break = true;
    } else {
      winner = /* Empty */2;
      index = index + 1 | 0;
    }
  };
  return winner;
}

function Game(Props) {
  var match = React.useState(function () {
        return [Caml_array.caml_make_vect(9, /* Empty */2)];
      });
  var setHistory = match[1];
  var history = match[0];
  var match$1 = React.useState(function () {
        return 0;
      });
  var setStep = match$1[1];
  var match$2 = React.useState(function () {
        return true;
      });
  var setXIsNext = match$2[1];
  var xIsNext = match$2[0];
  var handleClick = function (i) {
    var current = Caml_array.get(history, history.length - 1 | 0);
    var squares = $$Array.copy(current);
    if (calculateWinner(squares) === /* Empty */2 && Caml_array.get(squares, i) === /* Empty */2) {
      Caml_array.set(squares, i, xIsNext ? /* Cross */0 : /* Circle */1);
      Curry._1(setHistory, (function (prev) {
              return $$Array.append(prev, [squares]);
            }));
      Curry._1(setXIsNext, (function (prev) {
              return !prev;
            }));
      return Curry._1(setStep, (function (param) {
                    return history.length;
                  }));
    }
    
  };
  var current = Caml_array.get(history, match$1[0]);
  var winner = calculateWinner(current);
  var nextPlayer = xIsNext ? "X" : "O";
  var status = winner === /* Empty */2 ? "Next Player: " + nextPlayer : "Winner: " + squareValueString(winner);
  var moves = $$Array.mapi((function (i, param) {
          var desc = i === 0 ? "Go to game start" : "Go to move #" + String(i);
          return React.createElement("li", {
                      key: String(i)
                    }, React.createElement("button", {
                          onClick: (function (param) {
                              Curry._1(setStep, (function (param) {
                                      return i;
                                    }));
                              return Curry._1(setXIsNext, (function (param) {
                                            return i % 2 === 0;
                                          }));
                            })
                        }, desc));
        }), history);
  return React.createElement(React.Fragment, undefined, React.createElement("p", undefined, status), React.createElement(Board$TictactoeReason.make, {
                  squares: current,
                  changeSquare: handleClick
                }), React.createElement("ol", undefined, moves));
}

var make = Game;

exports.squareValueString = squareValueString;
exports.calculateWinner = calculateWinner;
exports.make = make;
/* react Not a pure module */
