'use strict';

var React = require("react");
var Square$TictactoeReason = require("./Square.bs.js");

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "board-row"
                }, React.createElement(Square$TictactoeReason.make, {
                      value: "1"
                    }), React.createElement(Square$TictactoeReason.make, {
                      value: "2"
                    }), React.createElement(Square$TictactoeReason.make, {
                      value: "3"
                    })), React.createElement("div", {
                  className: "board-row"
                }, React.createElement(Square$TictactoeReason.make, {
                      value: "4"
                    }), React.createElement(Square$TictactoeReason.make, {
                      value: "5"
                    }), React.createElement(Square$TictactoeReason.make, {
                      value: "6"
                    })), React.createElement("div", {
                  className: "board-row"
                }, React.createElement(Square$TictactoeReason.make, {
                      value: "7"
                    }), React.createElement(Square$TictactoeReason.make, {
                      value: "8"
                    }), React.createElement(Square$TictactoeReason.make, {
                      value: "9"
                    })));
}

var make = App;

exports.make = make;
/* react Not a pure module */
