// var romanNumeral = function(number) {
var belowFour = function(number) {
    var romanNumeral = "";
    for(var i = 1; i <= number; i++){
      romanNumeral += "I";
    }
    return romanNumeral;
};
