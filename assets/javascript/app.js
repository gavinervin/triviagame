$('#begin').on('click',function(){
	game.start();
})

$(document).on('click','#end',function(){
	game.done();
})
/* credit: washingtontimes.com for some trivia questions*/
var questions = [{
	    question: "Who holds the record for the longest field goal in NFL history?",
	    answers: ["Tom Dempsey", "David Akers", "Matt Prater", "John Kasay"],
	    correctAnswer: "Matt Prater"
},
	{ 
		question: "Who has the most wins as a head coach in the NFL?",
	    answers: ["John Fox", "Don Shula", "Tom Landry", "Bill Belichick"],
	    correctAnswer: "Don Shula"
},
	{
		question: "Who is the only Super Bowl MVP to be selected from the losing team?",
	    answers: ["Chuck Howley", "Tom Brady", "Ryan Leaf", "Jerry Rice"],
	    correctAnswer: "Chuck Howley"

},
	{
		question: "Drew Brees was drafted after Michael Vick in the 2001 draft.",
	    answers: ["True", "False"],
	    correctAnswer: "True"

},
	{
		question: "The largest margin of victory in a Super Bowl is 45 points.",
	    answers: ["True", "False"],
	    correctAnswer: "True"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 100,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#triv-section').prepend('<h4>Play Clock: <span id="counter">100</span> Seconds</h4>');
		$('#begin').remove();
			for(var i=0;i<questions.length;i++){
				$('#triv-section').append('<h2>'+questions[i].question+'</h2');
				for(var j=0;j<questions[i].answers.length;j++){
					$("#triv-section").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
				}
			}
			/* end game/submit answer button*/
			$('#triv-section').append('<br><button id="end">End Game</button>');
	},
	/* check if selected answer is correct*/
	done: function(){
		$.each($("input[name='question-0']:checked"),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1']:checked"),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2']:checked"),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3']:checked"),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4']:checked"),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});
		/* end of game score page*/
		this.result();
	},
	result: function(){
		clearInterval(timer);
		$('#triv-section h2').remove();
		$('#triv-section').html("<h2>Complete!</h2>");
		$('#triv-section').append("<h3>Correct: "+this.correct+"</h3>");
		$('#triv-section').append("<h3>Wrong: "+this.incorrect+"</h3>");

	}	
}







