/* this function is the same one called by the 'submit1' button, it checks for correct answers
and sums them to give a total*/
	function gradeQuiz(){

		/*this hides the submit button so the students can't press it again*/
		document.getElementById("submit1").style.visibility = "hidden";
		

		/*intitializing variables to store the answers that the student has selected*/
		var q1Answer = document.quiz1.quiz_1_q1.value;
		var q2Answer = document.quiz1.quiz_1_q2.value;
		var q3Answer = document.quiz1.quiz_1_q3.value;
		var q4Answer = document.quiz1.quiz_1_q4.value;
		var q5Answer = document.quiz1.quiz_1_q5.value;
		var q6Answer = document.quiz1.quiz_1_q6.value;

		/*will count the number of correct answers. it increases by one with every correct answer*/
		var score = 0;

	/* This if statement and the subsequent ones after it check if the
	checked option is the correct option and increases variable "score" by 1 if it is */
	if (q1Answer === "C"){

		score = score + 1;
	}

	if (q2Answer === "D"){

		score = score + 1;
	}

	if (q3Answer === "C"){

		score = score + 1;
	}

	if (q4Answer === "A"){

		score = score + 1;
	}

	if (q5Answer === "D"){

		score = score + 1;
	}

	if (q6Answer === "B"){

		score = score + 1;
	}

	/* This makes the paragraph containing the score of the student visible as soon as the submit
    button is clicked*/
	document.getElementById("showScore1").style.visibility = "visible";
	document.getElementById("showScore1").innerHTML = ("Your score: " + score);
}

/* This function is for the contact form page, it informs students that their form was sent succesfuly. 
I have placed it here to avoid creating a new Javascript file just for that*/
	function alertMe(){
		alert('sent succesfully')
	}