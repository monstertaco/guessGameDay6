var playerName = prompt("What is your name?");
var guesses = [];
    	function runQuestionOne() {
			var guess1 = prompt("Have I been to Denmark?").toLowerCase();
			guesses.push(guess1)
			if(guesses[0] == "yes" || guesses[0] == "y") {
				document.getElementById('denmark').innerHTML = "Nice job " + playerName + " you got it! I spent a semester in Denmark in 2010!";
				document.getElementById('denmarkPic').src = "denmark.jpg";
				document.getElementById('denmarkPic').height = "200";
				document.getElementById('denmarkPic').width = "200";
				document.getElementById('denmarkPic').alt = "Danish flag";
			}
			else {
				document.getElementById('denmark').innerHTML = "You're wrong " + playerName + " I studied in Denmark in 2010.";
				guesses.splice(0,1)
			runQuestionOne();
			}
		}
		runQuestionOne();
		function runQuestionTwo() {
			var guess2 = prompt("Do I have a pet fish?").toLowerCase();
			guesses.push(guess2)
			if(guesses[1] == "no" || guesses[1] == "n") {
				document.getElementById('fish').innerHTML = "Nice job " + playerName + " you got it! I don't have any pets at the moment.";
				document.getElementById('fishPic').src = "fish.jpg";
				document.getElementById('fishPic').height = "200";
				document.getElementById('fishPic').width = "200";
				document.getElementById('fishPic').alt = "Sad blob fish";
			}
			else {
				document.getElementById('fish').innerHTML = "You're wrong " + playerName + " I don't have any pets right now.";
				guesses.splice(1,1)
				runQuestionTwo();
			}
		}
        runQuestionTwo();
		function runQuestionThree() {
			var guess3 = prompt("What state am I from?").toLowerCase();
			guesses.push(guess3)
			switch(guesses[2]) {
				case'california':
					document.getElementById('myState').innerHTML = "Nice job " + playerName + " you got it! I grew up in Southern California.";
					document.getElementById('myStatePic').src = "California.png";
					document.getElementById('myStatePic').height = "200";
					document.getElementById('myStatePic').width = "200";
					document.getElementById('myStatePic').alt = "California outline with flag";
					break;
				case'ca':
					document.getElementById('myState').innerHTML = "Nice job " + playerName + " you got it! I grew up in Southern California.";
					document.getElementById('myStatePic').src = "California.png";
					document.getElementById('myStatePic').height = "200";
					document.getElementById('myStatePic').width = "200";
					document.getElementById('myStatePic').alt = "California outline with flag";
					break;
				case'oregon':
					document.getElementById('myState').innerHTML = "HINT: Close, but it's one state further South.";
					guesses.splice(2,1)
					runQuestionThree();
					break;
				case'washington':
					document.getElementById('myState').innerHTML = "HINT: Nope, my home state is further South.";
					guesses.splice(2,1)
					runQuestionThree();
					break;
				default:
					document.getElementById('myState').innerHTML = "HINT: It's a state on the West Coast.";
					guesses.splice(2,1)
					runQuestionThree();
			}
		}
		runQuestionThree();