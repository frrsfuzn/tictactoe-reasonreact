'use strict';

var React = require("react");

function Greeting(Props) {
  var name = Props.name;
  return React.createElement("button", undefined, "Hello " + (name + "!"));
}

var make = Greeting;

exports.make = make;
/* react Not a pure module */
