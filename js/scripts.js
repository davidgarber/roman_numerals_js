// var romanNumeral = function(number) {
var numeralI = function(number) {
    var romanNumeral = "";
    for(var i = 1; i <= number; i++){
      romanNumeral += "I";
    }
    return romanNumeral;
};

var numeralV = function(number) {
  var romanNumeral = [];

  if(number === 4) {
    romanNumeral.push("IV");
  } else {
    romanNumeral.push("V");
    var newNum = number - 5;
    romanNumeral.push(numeralI(newNum));
  }

  return romanNumeral.join("");
};
