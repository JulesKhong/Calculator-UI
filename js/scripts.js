// var sub = function(number1, number2) {
//   return number1 - number2;
// };
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var substract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
//
// var number1 = parseInt(prompt("Enter your number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = sub(number1, number2);
// alert (result);


var weight = parseInt(prompt("Enter your weight in lbs:"));
var height = parseInt(prompt("Enter your height in inches:"));
var result = bmi(weight, height);
alert (result);

var bmi = function (weight, height){
	return ((weight * 703) / (height * height));
};

var fahren = parseInt(prompt("What is the temp in F?"));
var result = ((fahren - 32)*(5/9));
alert (result);

var gal = parseInt(prompt("What is the temp in gallons?"));
var result = (gal/4) ;
alert (result);
