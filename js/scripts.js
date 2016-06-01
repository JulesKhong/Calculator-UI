//Business or back-end logic:

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

// User interface or front-end logic:
$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});
});


// var weight = parseInt(prompt("Enter your weight in lbs:"));
// var height = parseInt(prompt("Enter your height in inches:"));
// var result = bmi(weight, height);
// alert (result);
//
// var bmi = function (weight, height){
// 	return ((weight * 703) / (height * height));
// };
//
// var fahren = parseInt(prompt("What is the temp in F?"));
// var result = ((fahren - 32)*(5/9));
// alert (result);
//
// var gal = parseInt(prompt("What is the temp in gallons?"));
// var result = (gal/4) ;
// alert (result);
// var sub = function(number1, number2) {
//   return number1 - number2;
// };
// var sub = function(number1, number2) {
//   return number1 - number2;
// };
