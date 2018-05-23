
/* this function is the same one called by the checkans1 button, it checks for what answer the student enters
and gives feedback based on this answer*/

function checkAns1(){

	/*this hides the check answer button so the students can't press it again*/
	document.getElementById("checkans1").style.visibility = "hidden";
		

		/*intitializing variable to store the answer that the student has selected for quetion 1*/
		var q1Answer = document.quiz2.quiz_2_q1.value;
		

		/* This if statement checks what answer the student checked and provides feedback accordingly*/
		if (q1Answer === "A"){

			/*it searches the html document for an element with id 'Explan1' and  first makes it visible on the page
			it then changes the content of the element based on feedback that matches answer provided*/
			document.getElementById("Explan1").style.visibility = "visible";
			document.getElementById("Explan1").innerHTML = ("<strong> WRONG!</strong> <br> The router performs the POST as the first step. After this comes loading the bootstrap program. ");
		}
		else if (q1Answer === "B"){

			document.getElementById("Explan1").style.visibility = "visible";
			document.getElementById("Explan1").innerHTML = ("<strong> CORRECT!</strong> <br> The router will locate and load the Cisco IOS software from Flash as second step <br> it will then load the startup-config file from NVRAM as third step or enter setup mode.");
		}
		else if (q1Answer === "C"){

			document.getElementById("Explan1").style.visibility = "visible";
			document.getElementById("Explan1").innerHTML = ("<strong> WRONG!</strong> <br> Loading the bootstrap program from ROM is a step that accompanies the first step (Performing the POST routine).");
		}
		else if (q1Answer === "D"){

			document.getElementById("Explan1").style.visibility = "visible";
			document.getElementById("Explan1").innerHTML = ("<strong> WRONG!</strong> <br> All running-config files which haven't been saved to startup-config are discarded on power off of the router. Therefore loading the running-config file from RAM is not a part of boot sequence. ");
		}

}


/* this function is the same one called by the checkans2 button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAns2(){

	/*this hides the check answer button so the students can't press it again*/
	document.getElementById("checkans2").style.visibility = "hidden";
		

		/*intitializing variable to store the answer that the student has selected for quetion 2*/
		var q2Answer = document.quiz2.quiz_2_q2.value;
		

		/* This if statement checks what answer the student checked and provides feedback accordingly*/
		if (q2Answer === "A"){

			/*it searches the html document for an element with id 'Explan2' and  first makes it visible on the page
			it then changes the content of the element based on feedback that matches answer provided*/
			document.getElementById("Explan2").style.visibility = "visible";
			document.getElementById("Explan2").innerHTML = ("<strong> WRONG!</strong> <br> Theinterface fastethernet 0/0 command is commonly used to access the configuration mode used to apply specific parameters such as the IP address to the Fa0/0 port.");
		}
		else if (q2Answer === "B"){

			document.getElementById("Explan2").style.visibility = "visible";
			document.getElementById("Explan2").innerHTML = ("<strong> WRONG!</strong> <br> The line vty 0 4 command is used to access the configuration mode for Telnet.<br>The0and 4 parameters specify ports 0 through 4, or a maximum of five simultaneous Telnet connections.");
		}
		else if (q2Answer === "C"){

			document.getElementById("Explan2").style.visibility = "visible";
			document.getElementById("Explan2").innerHTML = ("<strong> CORRECT!</strong> <br> The first of the three commands needed to password protect the console port is line console 0 <br> The other two are: password cisco, login");
		}
		else if (q2Answer === "D"){

			document.getElementById("Explan2").style.visibility = "visible";
			document.getElementById("Explan2").innerHTML = ("<strong> WRONG!</strong> <br> The enable secret command is used to apply a password used on the router to access the privileged mode.");
		}

}


/* this function is the same one called by the checkans3 button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAns3(){
console.log("function 3 working")
	/*this hides the check answer button so the students can't press it again*/
	document.getElementById("checkans3").style.visibility = "hidden";
		

		/*intitializing variable to store the answer that the student has selected for quetion 3*/
		var q3Answer = document.quiz2.quiz_2_q3.value;
		

		/* This if statement checks what answer the student checked and provides feedback accordingly*/
		if (q3Answer === "A"){

			/*it searches the html document for an element with id 'Explan3' and  first makes it visible on the page
			it then changes the content of the element based on feedback that matches answer provided*/
			document.getElementById("Explan3").style.visibility = "visible";
			document.getElementById("Explan3").innerHTML = ("<strong> CORRECT!</strong> <br> The value of the Time-to-Live (TTL) field in the IPv4 header is used to limit the lifetime of a packet.<br>The sending host sets the initial TTL value; which is decreased by one each time the packet is processed by a router. <br>If the TTL field decrements to zero, the router discards the packet and sends an Internet Control Message Protocol (ICMP) Time Exceeded message to the source IP address.");
		}
		else if (q3Answer === "B"){

			document.getElementById("Explan3").style.visibility = "visible";
			document.getElementById("Explan3").innerHTML = ("<strong> WRONG!</strong> <br> Sequence Number is a field in the TCP header.");
		}
		else if (q3Answer === "C"){

			document.getElementById("Explan3").style.visibility = "visible";
			document.getElementById("Explan3").innerHTML = ("<strong> WRONG!</strong> <br> Acknowledgment Number is a field in the TCP header.");
		}
		else if (q3Answer === "D"){

			document.getElementById("Explan3").style.visibility = "visible";
			document.getElementById("Explan3").innerHTML = ("<strong> WRONG!</strong> <br> The Differentiated Services (DS) field is used to determine the priority of each packet.");
		}

}


/* this function is the same one called by the checkans4 button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAns4(){
console.log("function 4 working too!")
	/*this hides the check answer button so the students can't press it again*/
	document.getElementById("checkans4").style.visibility = "hidden";
		

		/*intitializing variable to store the answer that the student has selected for quetion 4*/
		var q4Answer = document.quiz2.quiz_2_q4.value;
	

		/* This if statement checks what answer the student checked and provides feedback accordingly*/
		if (q4Answer === "A"){

			/*it searches the html document for an element with id 'Explan4' and  first makes it visible on the page
			it then changes the content of the element based on feedback that matches answer provided*/
			document.getElementById("Explan4").style.visibility = "visible";
			document.getElementById("Explan4").innerHTML = ("<strong> CORRECT!</strong> <br> Protocol field in the IP header that identifies the upper-layer protocol the packet is carrying.");
		}
		else if (q4Answer === "B"){

			document.getElementById("Explan4").style.visibility = "visible";
			document.getElementById("Explan4").innerHTML = ("<strong> WRONG!</strong> <br> The Identification field is used to reorder fragmented packets.");
		}
		else if (q4Answer === "C"){

			document.getElementById("Explan4").style.visibility = "visible";
			document.getElementById("Explan4").innerHTML = ("<strong> WRONG!</strong> <br> The Version field identifies the IP version.");
		}
		else if (q4Answer === "D"){

			document.getElementById("Explan4").style.visibility = "visible";
			document.getElementById("Explan4").innerHTML = ("<strong> WRONG!</strong> <br> The Differential Services field is used for setting packet priority.");
		}

}


/* this function is the same one called by the checkans5 button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAns5(){
console.log("like a well oiled machine")

	/*this hides the check answer button so the students can't press it again*/
	document.getElementById("checkans5").style.visibility = "hidden";
		

		/*intitializing variable to store the answer that the student has selected for quetion 5*/
		var q5Answer = document.quiz2.quiz_2_q5.value;
		

		/* This if statement checks what answer the student checked and provides feedback accordingly*/
		if (q5Answer === "A"){

			/*it searches the html document for an element with id 'Explan5' and  first makes it visible on the page
			it then changes the content of the element based on feedback that matches answer provided*/
			document.getElementById("Explan5").style.visibility = "visible";
			document.getElementById("Explan5").innerHTML = ("<strong> WRONG!</strong> <br> static route is represented by the letter S");
		}
		else if (q5Answer === "B"){

			document.getElementById("Explan5").style.visibility = "visible";
			document.getElementById("Explan5").innerHTML = ("<strong> WRONG!</strong> <br> candidate default is represented by an asterisk ");
		}
		else if (q5Answer === "C"){

			document.getElementById("Explan5").style.visibility = "visible";
			document.getElementById("Explan5").innerHTML = ("<strong> CORRECT!</strong> <b> directly connected route is represented by the letter C");
		}
		else if (q5Answer === "D"){

			document.getElementById("Explan5").style.visibility = "visible";
			document.getElementById("Explan5").innerHTML = ("<strong> WRONG!</strong> <br> EIGRP is represented by the letter D");
		}

}


/* this function is the same one called by the checkans6 button, it checks for what answer the student enters
and gives feedback based on this answer*/
function checkAns6() {

	/*this hides the check answer button so the students can't press it again*/
	document.getElementById("checkans6").style.visibility = "hidden";
		

		/*intitializing variable to store the answer that the student has selected for question 6*/
		var q6Answer = document.quiz2.quiz_2_q6.value;
		

		/* This if statement checks what answer the student checked and provides feedback accordingly*/
		if (q6Answer === "A"){

			/*it searches the html document for an element with id 'Explan6' and  first makes it visible on the page
			it then changes the content of the element based on feedback that matches answer provided*/
			document.getElementById("Explan6").style.visibility = "visible";
			document.getElementById("Explan6").innerHTML = ("<strong> WRONG!</strong> <br> the router has an AUX port for remote management access");
		}
		else if (q6Answer === "B"){

			document.getElementById("Explan6").style.visibility = "visible";
			document.getElementById("Explan6").innerHTML = ("<strong> WRONG!</strong> <br> It has two Gigabit Ethernet interfaces for LAN access.");
		}
		else if (q6Answer === "C"){

			document.getElementById("Explan6").style.visibility = "visible";
			document.getElementById("Explan6").innerHTML = ("<strong> CORRECT!</strong> <br> It has two types of ports that are used for initial configuration and command-line interface management access. The two ports are the regular RJ-45 port and a new USB Type-B (mini-B USB) connector.");
		}
		else if (q6Answer === "D"){

			document.getElementById("Explan6").style.visibility = "visible";
			document.getElementById("Explan6").innerHTML = ("<strong> WRONG!</strong> <br> It has Compact Flash which can be used increase device storage, but it does not perform the functions of the CPU, which is required for operation of the device. ");
		}


		/*intitializing variables to store the answers that the student has selected to aid calculation of total score*/
		var q1Answer = document.quiz2.quiz_2_q1.value;
		var q2Answer = document.quiz2.quiz_2_q2.value;
		var q3Answer = document.quiz2.quiz_2_q3.value;
		var q4Answer = document.quiz2.quiz_2_q4.value;
		var q5Answer = document.quiz2.quiz_2_q5.value;


		/*will count the number of correct answers. it increases by one with every correct answer*/
		var score = 0;

		/* This if statement and the subsequent ones after it check if the
	checked option is the correct option and increases variable "score" by 1 if it is */
	if (q1Answer === "B"){

		score = score + 1;
	}

	if (q2Answer === "C"){

		score = score + 1;
	}

	if (q3Answer === "A"){

		score = score + 1;
	}

	if (q4Answer === "A"){

		score = score + 1;
	}

	if (q5Answer === "C"){

		score = score + 1;
	}

	if (q6Answer === "C"){

		score = score + 1;
	}

	/* This makes the paragraph containing the score of the student visible as soon as the submit
    button is clicked*/
    /*it searches the html document for an element with id 'showScore2' and  first makes it visible on the page
	it then changes the content of the element to whatever my score variable is equal to*/
	document.getElementById("showScore2").style.visibility = "visible";
	document.getElementById("showScore2").innerHTML = ("Your score: " + score);
}