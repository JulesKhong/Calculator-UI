//Business or back-end logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator==="add"){
      result = add (number1, number2);
    } else if (operater ==="subtract"){
      result = subtract(number1, number2);
    }
    else if (operater ==="multiply"){
      result = multiply(number1, number2);
    }
    else (operater ==="divide"){
      result = divide(number1, number2);
  }
  $("#output").text(result);
});
});






// // User interface or front-end logic:
// $(document).ready(function() {
// 	$("form#add").submit(function(event) {
// 		event.preventDefault();
// 		var number1 = parseInt($("#add1").val());
// 		var number2 = parseInt($("#add2").val());
// 		var result = add(number1, number2);
// 		$("#output").prepend("<h1>"+result+"</h1>");
// 	});
// });
//
// $(document).ready(function() {
// 	$("form#subtract").submit(function(event) {
// 		event.preventDefault();
// 		var number1 = parseInt($("#sub1").val());
// 		var number2 = parseInt($("#sub2").val());
// 		var result = subtract(number1, number2);
// 		$("#output").prepend("<h1>"+result+"</h1>");
// 	});
// });
//
// $(document).ready(function() {
// 	$("form#multiply").submit(function(event) {
// 		event.preventDefault();
// 		var number1 = parseInt($("#multi1").val());
// 		var number2 = parseInt($("#multi2").val());
// 		var result = multiply(number1, number2);
// 		$("#output").prepend("<h1>"+result+"</h1>");
// 	});
// });
//
// $(document).ready(function() {
// 	$("form#divide").submit(function(event) {
// 		event.preventDefault();
// 		var number1 = parseInt($("#divide1").val());
// 		var number2 = parseInt($("#divide2").val());
// 		var result = divide(number1, number2);
// 		$("#output").prepend("<h1>"+result+"</h1>");
// 	});
// });
//
// // var weight = parseInt(prompt("Enter your weight in lbs:"));
// // var height = parseInt(prompt("Enter your height in inches:"));
// // var result = bmi(weight, height);
// // alert (result);
// //
// // var bmi = function (weight, height){
// // 	return ((weight * 703) / (height * height));
// // };
// //
// // var fahren = parseInt(prompt("What is the temp in F?"));
// // var result = ((fahren - 32)*(5/9));
// // alert (result);
// //
// // var gal = parseInt(prompt("What is the temp in gallons?"));
// // var result = (gal/4) ;
// // alert (result);
// // var sub = function(number1, number2) {
// //   return number1 - number2;
// // };
// // var sub = function(number1, number2) {
// //   return number1 - number2;
// // };
