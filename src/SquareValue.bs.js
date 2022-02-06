'use strict';


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

exports.squareValueString = squareValueString;
/* No side effect */
