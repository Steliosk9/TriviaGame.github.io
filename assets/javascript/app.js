$(document).ready(function(){//I need jquery to run!

	var timer;
	var timeLeft = 5;

	var numCorrect = 0;
	var numIncorrect = 0;
	var numNull = 0;

	// $('.question').hide();

	$('.start').click(function(){
		// $(this).remove();

		$('.question').show();

		timer = setInterval(function(){
			if(timeLeft > 0){
				timeLeft--;
				$('.timer-text').text(timeLeft + " seconds left...");
			}else{
				$('.timer-text').text("Time's up!");
				gradePage();
				clearInterval(timer);
			}
			
		}, 1000);

	});


	var gradePage = function(){
		$('.question').each(function(){
			var questionForm = $(this).find('form');
			var answer = questionForm.find('input:checked');
			if(answer.length === 0){
				//didn't answer
				numNull++;
				console.log('no answer');
			}else{
				//they did answeraa
				if(answer.attr('correct')==="true"){
					//answer correct
					numCorrect++;
					$(this).prepend("<span class='green'>Correct</span>");
				}else{
					//answer incorrect
					numIncorrect++;
					$(this).prepend("<span class='red'>Incorrect</span>");
				}
			}
		});

		$('.timer-text').append(
			"<br><br>" 
			+ numCorrect + " <span class='green'>correct</span><br>" 
			+ numIncorrect + " <span class='red'>incorrect</span><br>"
			+ numNull + " unanswered");

	}


});