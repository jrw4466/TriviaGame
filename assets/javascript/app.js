var correct = 1;
var incorrect = 1;

var trivia = {
	question1: "What's your first name?",
	question2: "What's your last name?",
	question3: "What's your favorite color?",
	answers1: ["jake1", "jake2", "jake3"],
	answers2: ["sarah1", "sarah2", "sarah3"],
	answers3: ["blue", "red", "green"],
}

//var populateQuestions = function (button) {


$(document).ready(function() {
	
	$("#trivia").hide();
	$("#results").hide();

	$(".q1").html(trivia.question1);
	$(".q2").html(trivia.question2);
	$(".q3").html(trivia.question3);

	$("#a1-1").html(trivia.answers1[0]);
	$("#a1-2").html(trivia.answers1[1]);
	$("#a1-3").html(trivia.answers1[2]);

	$("#a2-1").html(trivia.answers2[0]);
	$("#a2-2").html(trivia.answers2[1]);
	$("#a2-3").html(trivia.answers2[2]);

	$("#a3-1").html(trivia.answers3[0]);
	$("#a3-2").html(trivia.answers3[1]);
	$("#a3-3").html(trivia.answers3[2]);



	$("#button-1").on("click", function() {
		
		$("#button-1").hide();
		$("#trivia").show();
		$("#results").hide();

});
	
	$("#button-2").on("click", function() {
		$("#button-1").hide();
		$("#trivia").hide();
		$("#results").show();

	});
});



	//$(".btn").on("click", function () {
		//var amount = +$(this).val();
		//score = amount + score;
		//$("#score2").html(score);