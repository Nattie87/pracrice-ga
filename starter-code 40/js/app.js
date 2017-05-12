// Welcome message
alert('Hi there, this is a calculator');

// Define answer early so it works later. A let so it can be changed
let answer = 0;

// --- Attempt at advance. doesn't work.
// start question on whether they want simple calculator or advanced calculator
// const type = prompt('simple or advanced?');
//
// // Run prompt for first number if true
//
// if (type === 'advanced') {
//   let advancedNumber = prompt('What is the first number?');
// } else
//
// // promot to find the advanced operator, either root or power
// const advancedAction = prompt('Do you want the root or power?');
//
// // parse int to change string to number
// advancedNumber = parseInt(advancedNumber);
//
// // the square and root to go through a switch
// switch(advancedAction) {
//   case 'root' :
//     answer = (Math.sqrt(advancedNumber));
//     break;
//   case 'power':
//     answer = (Math.pow(advancedNumber));
//     break;
//   default:
//     answer = 'Default';
// }

// first prompt will ask what the user's first number is through a prompt, which is will store as a let
let firstNumber = prompt('What is your first number?');

// then a second prompt will ask the user whether they would like to plus, minus, divide or multiply, with the answers being stored as let
const action = prompt('What would you like to do to your number? Please enter: "add", "minus", "divide", "times"');

// then a third prompt will ask your second number and store it in a let
let secondNumber = prompt('What is your second number?');

// parses to change the user input from a string into a number so the calculation is correct
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

// a swtich will run the calculation
switch(action) {
  case 'add' :
    answer = (firstNumber + secondNumber);
    break;
  case 'minus':
    answer = (firstNumber - secondNumber);
    break;
  case 'divide':
    answer = (firstNumber / secondNumber);
    break;
  case 'times':
    answer = (firstNumber * secondNumber);
    break;
  default:
    answer = 'Default';
}
// an alert will show your answer
alert('Your answer is ' + (answer));

// add a forced page reload to restart the process
window.location.reload();
