<!DOCTYPE HTML>
<html>
<head>

	<title> Learn With J2:Thanks </title>
	<link rel="icon" href="ImagesJ2/think.png" sizes="16x16" type="image/png"/>
	<link rel="stylesheet" href="CSSJ2/J2.css" type="text/css"/>
	<link rel="stylesheet" href="CSSJ2/Quizes.css" type="text/css"/>
	<script src="Quiz1.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Pompiere" rel="stylesheet">

</head>

<!--within the body tag I have included a function call for a function within my Quiz1.js file which alerts the student their form has been sent succesfully-->
<body onload="alertMe();">

<!--This Div contains the body of my website. I've put it here for easy scaling and styling-->
<div class="page">

	<!--This Div Contains the sidebar which houses the navigation for the homepage as well as quick links to parts of the website-->
	<div class="Left">
		<a href="Home.html"><img src="imagesJ2/think.png" alt="site logo" height="30" width="30"/></a>

		<form> 
		<input type="search" name="search"> 
		<button type="submit" name="submit"> <img src="https://www.hullboxoffice.com/site/themes/hbo/svg/search.svg" alt="search icon" height="15" width="15" /> 
		</button> 
		</form>

		<p> <a href="Home.html"> Home </a> </p>
		<p> <a href="Intro_to_Java.html"> Intro to Programming </a> </p>
		<p> <a href="Software_Engineering.html"> Software Eng. </a> </p>
		<p> <a href="Mathematics_For_Computing.html"> Mathematics </a> </p>
		<p> <a href="Introduction_To_Networks.html"> Intro to Networks </a> </p>
  		<!--This div contains a drop down with links to the Quiz pages for easy access from the menu-->
  		<div class="allQuizes">
		<p class="Quizzes"> Quizzes </p>
		<div class="hoverQuiz">
			<p> Java quiz 1 </p>
			<p> Java quiz 2 </p>
			<p> Java quiz 3 </p>
			<p> Math quiz 1 </p>
			<p> Math quiz 2 </p>
			<p> Math quiz 3 </p>
			<p> <a href="Quiz1.html">Networks quiz 1</a> </p>
			<p> <a href="Quiz2.html">Networks quiz 2</a> </p>
			<p> <a href="Quiz3.html">Networks quiz 3</a> </p>
			<p> Software Eng quiz 1 </p>
			<p> Software Eng quiz 2 </p>
			<p> Software Eng quiz 3 </p>
		</div>
		</div>
		<p> Grades </p>
		<p> <a href="contact_form.html">Contact Tutors</a> </p>
		<p> __________________________ </p>

		<p> Quicklinks</p>
		<p> Blog </p>
		<p> Settings </p>
		<p> Connect to Youtube </p>
		<p> About Us </p>

	</div>


	<!--This Div contains the main content area of the homepage. This is where actual information is located-->
	<div class="Right">

		<div class="homeicon">
	
			<div class="sign">
				<p> <img src="imagesJ2/think.png" alt="site logo" height="50" width="50"/>Login | Signup</p>
			</div>

		</div>

		<!--breadcrumb navigation-->
		<p class="homeicon2_0"> <img src="https://png.icons8.com/material/1600/00897B/home" alt="home icon" height="15" width="15"/> <a href="Home.html"> Home</a> > <a href="contact_form.html">Contact Tutors</a> > Form Sent</p>

		<!--The following php code takes the first name, last name and lecturer name from the form filled by the student on the Contact Form page and informs them that their response has been recorded and they will be contacted soon. It does this using the 'POST' method-->
		<?php 
	
			$fName = $_POST["first_Name"];
			$lName = $_POST["last_Name"];
			$lectName = $_POST["lecturer_Name"];

    		echo('<p class="confirmation" style="font-family: sans-serif; background-color: #D8E8F0; padding-left: 40px; margin: 20px; border-radius: 5px;"> Thanks ' .$fName. ' '.$lName. ' Your response was recorded. ' .$lectName. ' will contact you within 3 working days</p>');
		?>
	
		<!--The following section contains the footer of my page.I've used a table to organise it-->
		<p class="prefoot">.</p>
		<div class="footer">
        	<table>
    			<tr>
    				<td class="fone">
    					<p> Contact US </p>
    					<p> Become a TA </p>
    					<p> Discounts </p>
    					<p> What's New? </p>
    					<p> Download J2</p>
    				</td>

   		 			<td class="ftwo">
   			 			<p> Reach Out To Us </p>
    					<img class="icons" src="https://www.shareicon.net/data/256x256/2015/08/20/87919_tw_512x512.png" alt="twitter icon" height="25" width="25"/>
   						<img class="icons" src="https://3.bp.blogspot.com/-2BEKhH9HnuE/WL2WvS7cACI/AAAAAAAApZ4/cT_SX_6fvnQkhIsJUpwBZuvwyVzmImJjQCLcB/s320/facebook512x512.png" alt="facebook icon" height="25" width="25"/>
    					<img class="icons" src="http://wessexlifts.com/alt/images/youtube.jpg" alt="youtube icon" height="25" width="25"/>
    					<img class="icons" src="http://www.clker.com/cliparts/5/S/U/Y/A/R/email-icon-hi.png" alt="email icon" height="25" width="25"/>
    				</td>

   	 				<td class="fthree">
   	 					<!-- Search box in page footer-->
    					<form> <input type="search" name="search" value=""> <button type="submit" name="submit"> <img src="https://www.hullboxoffice.com/site/themes/hbo/svg/search.svg" alt="search icon" height="15" width="15" /> </button> </form>
    				</td>

    			</tr>
   			</table>

		</div>

  </div>
</div>

</body>
</html>