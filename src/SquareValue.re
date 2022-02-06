 type squareValue = 
  | Cross
  | Circle
  | Empty;

let squareValueString = (value: squareValue): string => {
  switch(value){
    | Cross => "X"
    | Circle => "O"
    | Empty => ""
  };
};