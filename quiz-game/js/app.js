$(document).ready(function(){

  var Quiz;
  var Questions;

  function populate() {
    if(quiz.isEnded()){
      // showScore();
    } else {
      //show question
      var element = document.getElementById('question');
      element.innerHTML = quiz.getQuestionIndex().text;

      //show choices for quiz
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
        element = document.getElementById('choice');
        element.innerHTML = choices[i];
      }
    }
  }

  var questions = [
    new Questions('What is the capital of England?', ['Bogna', 'Plymouth', 'London'], 'London'),
    new Questions('What is the capital of France?', ['Paris', 'Ibiza', 'Glastonbury'], 'Paris'),
    new Questions('What is the capital of Spain?', ['Dulwich', 'Plymouth', 'Madrid'], 'Madrid'),
    new Questions('What is the capital of Canada?', ['Toronto', 'Ottowa', 'Monteoal'], 'Ottowa')
  ];

  var quiz = new Quiz(questions);

  populate();

});
