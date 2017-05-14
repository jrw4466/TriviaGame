var correct = 1;
var incorrect = 1;
//var unanswered = 1;

var trivia = {
	question1: "What's my favorite color?",
	question2: "What's my favorite NBA basketball team?",
	question3: "What's my favorite band?",
	answers1: ["Red", "Blue", "Green"],
	answers2: ["Spurs", "Rockets", "Mavericks"],
	answers3: ["The Naked and Famous", "Maroon 5", "Nickelback"],
}



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

	function scoreCount() {

	var true1 = document.getElementById("radio1-1").checked;
	var true2 = document.getElementById("radio2-1").checked;
	var true3 = document.getElementById("radio2-1").checked;
	console.log(true1);
	console.log(true2);
	console.log(true3);


	if (true1 === true) {
		document.getElementById("correct").innerHTML = correct++;
	} else {
		document.getElementById("incorrect").innerHTML = incorrect++;
	}

	if (true2 === true) {
		document.getElementById("correct").innerHTML = correct++;
	} else {
		document.getElementById("incorrect").innerHTML = incorrect++;
	}

	if (true3 === true) {
		document.getElementById("correct").innerHTML = correct++;
	} else {
		document.getElementById("incorrect").innerHTML = incorrect++;;
	}
	}


	$("#button-1").on("click", function() {
		
		$("#button-1").hide();
		$("#trivia").show();
		$("#results").hide();

	var mins = .1;  //Set the number of minutes you need
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
   
    setInterval(Decrement,1000); 

    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("timerCount").innerHTML = currentMinutes + ":" + currentSeconds; 
        if(secs !== -1) setTimeout('Decrement()',1000);
    }

});
	
	$("#button-2").on("click", function() {
		$("#button-1").hide();
		$("#trivia").hide();
		$("#results").show();
		scoreCount();


	});
});
