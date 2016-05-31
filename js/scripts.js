var sub = function(number1, number2) {
  return number1 - number2;
};
var add = function(number1, number2) {
  return number1 + number2;
};

var substract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


var number1 = parseInt(prompt("Enter your number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = sub(number1, number2);
alert (result);




var weight = parseInt(prompt("Enter your weight in lbs:"));
var height = parseInt(prompt("Enter your height in inches:"));
var result = bmi(weight, height);
alert (result);

var bmi = function (weight, height){
	return ((weight * 703) / (height * height));
};
