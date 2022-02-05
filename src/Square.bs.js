'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Square(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setValue = match[1];
  return React.createElement("button", {
              className: "square",
              onClick: (function (param) {
                  return Curry._1(setValue, (function (param) {
                                return "X";
                              }));
                })
            }, match[0]);
}

var make = Square;

exports.make = make;
/* react Not a pure module */
