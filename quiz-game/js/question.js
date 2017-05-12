//constructor function
function Question(text, choices, answer) {
  this.text=text;
  this.choices = choices;
  this.answer = answer; //attributes for the questions
}
//function for correction choice
Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};
