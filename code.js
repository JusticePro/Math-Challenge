// JavaScript Document
var answer = "2";
function onAnswer() {
	var question = document.getElementById("question");
	var input = document.getElementById("answer").value;
	var inputElement = document.getElementById("answer");
	if (input==="") {
		confirm("You can't have the input empty.");
	}else {
		if (input===answer) {
			inputElement.value = "";
			generateQuestion();
		}else {
			confirm("Nah. Sorry");
		}
	}
}
function generateQuestion() {
	var question = document.getElementById("question");
	var info = document.getElementById("info");
	
	// Reset Info
	info.textContent = "";
	
	/*
		0=Addition, 1=Subtraction, 2=Multiplication
	*/
	var typeOfQuestion = Math.floor(Math.random() * 4);
	
	/* Addition */
	if (typeOfQuestion===0) {
		
		// From 0 to 1000
		var max = 1000 + 1;
		
		var number1 = Math.floor(Math.random() * max);
		var number2 = Math.floor(Math.random() * max);
		
		answer = (number1 + number2) + "";
		question.textContent = "What is " + number1 + " plus " + number2 + "?"
	}
	
	/* Subtraction */
	if (typeOfQuestion===1) {
		
		// From 0 to 500
		var max = 500 + 1;
		
		var number1 = Math.floor(Math.random() * max);
		var number2 = Math.floor(Math.random() * max);
		
		answer = (number1 - number2) + "";
		question.textContent = "What is " + number1 + " subtracted by " + number2 + "?"
	}
	
	/* Multiplication */
	if (typeOfQuestion===2) {
		
		// From 0 to 100
		var max = 100 + 1;
		
		var number1 = Math.floor(Math.random() * max);
		var number2 = Math.floor(Math.random() * max);
		
		answer = (number1 * number2) + "";
		question.textContent = "What is " + number1 + " times " + number2 + "?"
	}
	
	/* Division */
	if (typeOfQuestion===3) {
		
		// From 0 to 100
		var max = 100 + 1;
		
		var number1 = Math.floor(Math.random() * max);
		var number2 = Math.floor(Math.random() * max);
		
		answer = round((number1 / number2), 3) + "";
		question.textContent = "What is " + number1 + " divided by " + number2 + "?";
		info.textContent = "Round to hundredths"
	}
	
}
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}