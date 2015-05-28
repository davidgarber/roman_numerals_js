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

var numeralX = function(number) {
  var romanNumeral = [];

  if(number === 9) {
    romanNumeral.push("IX");
  } else {
    while (number >= 10) {
      romanNumeral.push("X");
      number -= 10;
    }
    if(number === 9) {
      romanNumeral.push("IX");
    }else if (number === 5) {
      romanNumeral.push("V");
    }else if (number < 4) {
      romanNumeral.push(numeralI(number));
    }else  {
      romanNumeral.push(numeralV(number));
    }
  }

  return romanNumeral.join("");
};
