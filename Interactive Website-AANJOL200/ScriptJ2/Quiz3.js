/* this function is the same one called by the submitAns button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAnsOne(){

	    /*this hides the submitAns button so the students can't press it again*/
		document.getElementById("submitAns").style.visibility = "hidden"
		var q1Answer = document.quiz3.quiz_3_q1.value;
		/*here I created an array containing possible correct answers, these array entries will be used later to check
		if the answer the student entered for question 1 quiz 3 is the correct one*/
		var possibleAnswers = ["IPV6 addresses", " IPV6 Addresses", "ipv6 adresses", "IPv6", "IPv6 addresses", "ipv6", "ipv6 Addresses"];

		
		/* This for loop checks what answer the student checked and provides feedback accordingly*/
		/*it does this by taking the answer the student picked which was stored in variable 'q1Answer' and checks it against 
		a loop of my possible answers array to see if it matches anyone of them*/
		for(i = 0; i < possibleAnswers.length; i++){
			if ( q1Answer === possibleAnswers[i]){

			/*it searches the html document for an element with id 'Answer1' and  first makes it visible on the page
			it then changes the content of the element based on feedback that matches answer provided*/
			document.getElementById("Answer1").style.visibility = "visible";
			document.getElementById("Answer1").innerHTML = (" <strong>Correct!</strong> IPv4 addresses have been replaced by IPv6 addresses because we have run out of IPv4 addresses to assign to the devices");
			break;
			}
			else {
			document.getElementById("Answer1").style.visibility = "visible";
			document.getElementById("Answer1").innerHTML = ("<strong>Incorrect!</strong> ");
			
			}
		
	     }

}


/* this function is the same one called by the checkanstwo button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAnsTwo(){

	/*this hides the checkanstwo button so the students can't press it again*/
	document.getElementById("checkanstwo").style.visibility = "hidden"
	var q2Answer = document.quiz3.quiz_3_q2.value;
	/*collecting the integer value of this input initially gave me issues so I converted to a string to make it's use easier.
	I this did using a  function*/
	var Ans = q2Answer.toString();

	/* This if statement checks if the student's answer is correct by taking the answer the student
	picked which was stored in variable 'Ans' and then provides feedback accordingly*/
	if (Ans === "7"){

		/*it searches the html document for an element with id 'Answer2' and  first makes it visible on the page
		it then changes the content of the element based on feedback that matches answer provided*/
		document.getElementById("Answer2").style.visibility = "visible";
		document.getElementById("Answer2").innerHTML = ("<strong>Correct!</strong> The Layers of the OSI model in order are<br>Application<br>Presentation<br>Session<br>Transport<br>Network<br>DataLink<br>Physical");
				
	}
	else {

		document.getElementById("Answer2").style.visibility = "visible";
		document.getElementById("Answer2").innerHTML = ("<strong>Incorrect!</strong> There are 7 layers in the OSI model in the order<br>Application<br>Presentation<br>Session<br>Transport<br>Network<br>DataLink<br>Physical");
		
	}
}


/*this function is called once the student inputs by moving the range slider for question 3*/
function show(){

	/*it collects the value of the input and stores it variable 'q3Answer'*/
	var q3Answer = document.quiz3.quiz_3_q3.value;
	/*next, it takes the value of the student's input and replaces it with the value of the <output> element 
	with id 'ansVisual' which helps the student see what answer he's picking exactly.*/
	document.getElementById("ansVisual").value = q3Answer;

}

/* this function is the same one called by the checkansthree button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAnsThree(){

	var q3Answer = document.quiz3.quiz_3_q3.value;
	/*I converted to a string to make it's use easier. I this did using a  function*/
	var Ans = q3Answer.toString();

	/*this hides the checkansthree button so the students can't press it again*/
	document.getElementById("checkansthree").style.visibility = "hidden"

	/* This if statement checks if the student's answer is correct by taking the answer the student
	picked which was stored in variable 'Ans' and then provides feedback accordingly*/
	if (Ans === "149"){

		document.getElementById("Answer3").style.visibility ="visible";
		document.getElementById("Answer3").innerHTML = ("<strong>Correct!</strong> 10010101 in decimal is 149");
	}
	else {

		document.getElementById("Answer3").style.visibility ="visible";
		document.getElementById("Answer3").innerHTML = ("<strong>Incorrect!</strong><br> <img src='ImagesJ2/Ans.jpg' alt='correct answer' height='200' width='300'/>");
	}
}


/*This function is called by the answer options of question four, it takes a parameter and tells us what element is 
being dragged. It does this by setting the data type and data value of the element being dragged*/
function pickAns(event) {
	/*This is the function called by the event, it calls another function 'setData' */
    event.dataTransfer.setData("Answer", event.target.id);

}

/*since the default value of any HTML element unless otherwise specified is not to allow any other element takes its place,
this function serves the purpose of allowing the answer box I created accept the  answer which is another element*/
function acceptAns(event) {
    event.preventDefault();
}

/*This is the function called when the answer is dropped in the answer box first enforces the default state of not accepting
a draggable element is turned of using the 'preventDefault' method once again before going on to assign the draggable
as the new content(child) of the other 'target' element which is the pink box*/
function dropAns(event) {
    event.preventDefault();
    /*This variable stores the element which the student picked from the two draggable options since they both call the
    'pickAns' function */
    var q4Answer = event.dataTransfer.getData("Answer");
    event.target.appendChild(document.getElementById(q4Answer));
    

    /*This function once called checks the answer provided by the student for question four to see whether it's the correct answer or not */
    checkAnsFour();
}


/*This function once called checks the answer provided by the student for question four to see whether it's the correct answer or not */
function checkAnsFour(){

	/*Here I check for the text of the context of my answer box which now contains whatever draggable element
	the student chose as their answer for question 4. the 'trim()' element is called to remove any extra spaces after the text
	contained in the answer box to avoid issues when validating the answer in my if statement*/
	var q4Answer = document.getElementById("answerbox").innerText.trim();
	
	/* This if statement checks if the student's answer is correct by taking the answer the student
	picked which was stored in variable 'q4Answer' and then provides feedback accordingly*/
	if (q4Answer === "two"){

		document.getElementById("wrongAns").style.visibility = "hidden";
		document.getElementById("Answer4").style.visibility = "visible";
		document.getElementById("Answer4").innerHTML = ("<strong>Correct!<br> IPv4 addresses used to be the sole form of addresses.<br> The world has slowly run out IPv4 addresses and IPv6 addresses will be replacing them<br> Both are currently in use</strong>");
	}
	else if(q4Answer === "six"){

		document.getElementById("correctAns").style.visibility = "hidden";
		document.getElementById("Answer4").style.visibility = "visible";
		document.getElementById("Answer4").innerHTML = ("<strong>Incorrect!<br> IPv4 addresses used to be the sole form of addresses.<br> The world has slowly run out IPv4 addresses and IPv6 addresses will be replacing them<br> Both are currently in use</strong>");
	}
}


/* this function is called by the endQuiz button, it ends the quiz and sums the number of correct answers the student has
to give the score for quiz 3*/
function finishQuiz(){

		/* this will hide the endQuiz button by searching for its id within the document and changing it's css*/
		document.getElementById("endQuiz").style.visibility = "hidden"

		/*collects answer for question 1 and stores in a variable*/
		var q1Answer = document.quiz3.quiz_3_q1.value;
		var possibleAnswers = ["IPV6 addresses", " IPV6 Addresses", "ipv6 adresses", "IPv6", "IPv6 addresses"];
		
		/*collects answer for question 2 and stores in a variable*/
		var q2Answer = document.quiz3.quiz_3_q2.value;
		var Ans2 = q2Answer.toString();

		/*collects answer for question 3 and stores in a variable*/
		var q3Answer = document.quiz3.quiz_3_q3.value;
		var Ans3 = q3Answer.toString();

		/*collects answer for question 4 and stores in a variable*/
		var q4Answer = document.getElementById("answerbox").innerText.trim();


		
		var score = 0;

	/*checks if question 1 is correct and adds 1*/
	for(i = 0; i < possibleAnswers.length; i++){
			if ( q1Answer === possibleAnswers[i]){

		score = score + 1;
	}
	}

	/*checks if question 2 is correct and adds 1*/
	if (Ans2 === "7"){

		score = score + 1;
	}

	/*checks if question 3 is correct and adds 1*/
	if (Ans3 === "149"){

		score = score + 1;
	}

	/*checks if question 4 is correct and adds 1*/
	if (q4Answer === "two"){

		score = score + 1;
	}


	/* This makes the paragraph containing the score of the student visible as soon as the endQuiz
    button is clicked*/
    /*it searches the html document for an element with id 'showScore3' and  first makes it visible on the page
	it then changes the content of the element to whatever my score variable is equal to*/
	document.getElementById("showScore3").style.visibility = "visible";
	document.getElementById("showScore3").innerHTML = ("Your score: " + score);
}