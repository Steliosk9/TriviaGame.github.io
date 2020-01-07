var questions = [
	{
	  question: 'The character famous for dying each episode is?',
	  choices: ['Cartman', 'Kyle', 'Kenny','Stan'],
	  answer: 'Kenny',
	  userAnswer: '',
	},
	{
	  question: "The animated series takes place in which state?",
	  choices: ['Washington', 'Colorado', 'California, Montana'],
	  answer: 'Colorado',
	  userAnswer: '',
	},
	{
	  question: 'Cartman discovers the identity of his father and is shocked to learn it"s',
	  choices: ['Chef', 'Big Gay Al', 'His Mother','Mr. Garrison'],
	  answer: 'His Mother',
	  userAnswer: '',
	},
	{
	  question: 'In the episode "Cartman gets an Anal Probe" who was taken by aliens?',
	  choices: ['Stan', 'Shelly', 'Cartman','Chef'],
	  answer: 'Cartman',
	  userAnswer: '',
	},
	{
	  question: 'What cartoon is the gang"s favorite?',
	  choices: ['Tom and Jerry', 'Itchy and Scratchy', 'Terrance and Phillip','The Simpsons'],
	  answer: 'Terrance and Phillip',
	  userAnswer: '',
	},
	{
	  question: 'In the episode "Chicken lover", Officer Barbrady is removed from duty because he can"t read. Who takes his place?',
	  choices: ['Chef', 'Cartman', 'Mr. Garrison','Stan"s Uncle Jimbo'],
	  answer: 'Stan"s Uncle Jimbo',
	  userAnswer: '',
	},
	{
	  question: 'Who is the school"s counselor?',
	  choices: ['Mr. Garrison', 'Mr. Mackey', 'Mrs. Choksondik','Mrs. Crabtree'],
	  answer: 'Mr. Mackey',
	  userAnswer: '',
	},
	{
	  question: 'Who, in the gang, hate each other?',
	  choices: ['Kyle and Stan', 'Kenny and Kyle', 'Cartman and Kyle','Cartman and Kenny'],
	  answer: 'Cartman and Kyle',
	  userAnswer: '',
	},
	{
	  question: "What colour is Butters' hair?",
	  choices: ['Brown', 'Black', 'Blonde',"None - he is bald"],
	  answer: 'Blonde',
	  userAnswer: '',
	},
	{
	  question: ' What is the boys teacher called?',
	  choices: ['Mr. Garrison', 'Mr. Mackey', 'Chef','Big Gay Al'],
	  answer: 'Mr. Garrison',
	  userAnswer: '',
	},
	{
	  question: 'In the episode with Michael Jackson, who becomes Michael Jackson"s best friend?',
	  choices: ['Kenny', 'Big Gay Al', 'Butters','Cartman'],
	  answer: 'Kenny',
	  userAnswer: '',
	},
	{
	  question: 'Who is always nervous?',
	  choices: ['Craig', 'Kenny', 'Tweek', 'Stan'],
	  answer: 'Tweek',
	  userAnswer: '',
	},
	{
	  // question: 'What are the names of the creators of South Park?',
	  // choices: ['Carl Fischer and Tom Morris', 'Tony Beadle and Max Harris', 'Trey Parker and Matt Stone'],
	  // answer: 'Trey Parker and Matt Stone',
	  // userAnswer: '',
	}
  ];
  
  //stop the timer
  //make the done button work
  //shows their stats
  
  var clockRunning = false;
  var timeLeft = 60;
  var clock;
  var correctAnswers = [];
  
  
  window.onload = function() {
	$('#done').on('click', function() {
	  console.log('clicked');
	  done();
	});
	$('#start').on('click', start);
	
	
  };
  
  function start() {
	$('#start').addClass('hide');
	$('#questions').removeClass('hide');
	$('.image').removeClass('hide');
  
	if ((clockRunning = false)) {
	  clockRunning = true;
	}
  
	clock = setInterval(runClock, 1000);
	$('#end-page').addClass('hide');
  }
  
  function runClock() {
	timeLeft--;
	$('.counter').html(timeLeft);
  
	if (timeLeft === 0) {
	  done();
	  clearInterval(timeLeft);
	  // clockRunning = false
	}
  }
  
  function done() {
	console.log(clock);
	clearInterval(clock);
	clockRunning = false;
  
	
	$("#my_audio").get(0).play();
	 
  
	$('#correct').removeClass('hide');
	$('.image').addClass('hide');
	$('#questions').addClass('hide');
	$('.counter').addClass('hide')
	$('#count').addClass('hide');
	$('#end-page').removeClass('hide');
	$("#start").addClass('hide');
  
	for (var i = 0; i < questions.length; i++) {
	  console.log(questions[i]);
	  if (questions[i].answer === questions[i].userAnswer) {
		correct++;
		console.log(correct);
		
		$('#correct-answers').text('Correct Answers: ' + correct);
	  } else {
		incorrect++;
		console.log(incorrect);
		  
		$('#incorrect-answers').text('Incorrect Answers: ' + incorrect);
		
		console.log(incorrect);
	  }
  
	  
	}
  
	
	
   
  }
  var incorrect = 0;
  var correct = 0;
  
  
  
  
  
  // function to print all questions to page
  function renderQuestions() {
	// clear out form
	$('#quiz-form').empty();
  
	// Loop through questions array
	questions.forEach(function(question, index) {
	  // create div to hold question
	  var $question = $('<div>').addClass('card');
	  $('div').addClass('custom-card');
  
	  // <div class="form-group"></div>
  
	  // add question to div
	  var $label = $('<h5>').text(question.question).appendTo($question);
	  /*
			<div class="form-group"> 
			  <h4>Question 1</h4> 
			</div>
		  */
  
	  // shuffle choices
	  question.choices = question.choices.sort(function() {
		return 0.5 - Math.random();
	  });
  
	  // create a loop to iterate through question's choices and create radio buttons for each one
	  for (var i = 0; i < question.choices.length; i++) {
		// create a div for choice and add bootstrap classes
		var $choice = $('<div>');
		$choice.addClass('form-check form-check-inline');
  
		// create an input tag for the radio button
		var $radio = $('<input>');
  
		// add attributes to provide the answer choice
		// the "name" attribute is super important, all radio buttons per question need to have the same "name" so they know which question it applies to
		$radio
		  .attr({
			type: 'radio',
			value: question.choices[i],
			name: index,
			class: 'form-check-input',
		  })
		  .appendTo($choice);
  
		// create label to actually print the choice to the page
		var $choiceLabel = $('<label>');
		$choiceLabel
		  .text(question.choices[i])
		  .addClass('form-check-label')
		  .appendTo($choice);
  
		// add whole radio button choice to question
		$choice.appendTo($question);
	  }
	  // when done making all of the choices, add whole question to the page
	  $('#quiz-form').append($question);
	});
  }
  
  // create on "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page
  $('#quiz-form').on('change', '.form-check-input', function() {
	console.log(this);
  
	// GET question index out of "name" attribute so we know what question you answered
	var questionIndex = $(this).attr('name');
  
	console.log(questions[questionIndex]);
  
	// get value out of radio button you selected
	var answer = $(this).val();
  
	// set answer to question's userAnswer property
	questions[questionIndex].userAnswer = answer;
  });
  
  renderQuestions();
  