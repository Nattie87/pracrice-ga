var ED = ED || {};

ED.setup = function setup(){
  //having all of the variables in one place is so much easier to read.
  //variable for each of the elements that are on the platform
  this.$coffee      = $('#coffee .content');
  this.$fridge      = $('#fridge .content');
  this.$temperature = $('#temp .content');
  this.$mood        = $('#mood .content');

  this.coffee      = 6;
  this.fridge      = 8;
  this.temperature = 22.5;
  this.mood        = null;
  //FYI the purple rainyumbrella emoji and the lightning don't work. very strange
  this.moods = ['&#9889;', '&#9729;', '&#9748;', '&#9730;', '&#9788;'];
  this.EVENTSET = [
    'fridge:put',
    'fridge:take',
    'coffee:drink',
    'coffee:buy',
    'temp:up',
    'temp:down'
  ];
  //call this function when setup is complete
  this.calculateAverage();
  this.updateWidgets();

  //putting the setInterval into this function for the setup makes more sense as this will be called once when the page loads.
  setInterval(() => {
    ///calling the functions
    ED.updatingWidgetValues();
    ED.calculateAverage();
    ED.updateWidgets();
  }, 1000);
};

ED.updateWidgets = function updateWidgets() {
  this.$coffee.text(this.coffee);
  this.$fridge.text(this.fridge);
  this.$temperature.text(this.temperature);
  this.$mood.html(this.mood);
};

//testing to see if each of the events are working initially
// ED.EVENTSET = [
//   'fridge:take'
// ];

//one set interval that will pull one of the EVENTSET out of the array onto the platform using a switch statement
ED.updatingWidgetValues = function updatingWidgetValues(){
  var choice = ED.EVENTSET[Math.floor(Math.random() * ED.EVENTSET.length)];
  console.log(choice);
  switch(choice){
    case 'fridge:put':
      this.fridge++;
      break;
    case 'fridge:take':
      if (this.fridge === 0) break;
      this.fridge--;
      break;
    case 'coffee:drink':
      if (this.coffee === 0) break;
      this.coffee--;
      break;
    case 'coffee:buy':
      this.coffee++;
      break;
    case 'temp:up':
      this.temperature += 0.5;
      break;
    case 'temp:down':
      this.temperature -= 0.5;
      break;
  }
};

ED.calculateAverage = function calculateAverage() {
  //now we have the three numbers below going either up or down and now i have to find the average score to make the final office mood work.
  var temperatureScore = this.calculateTempScore();
  var fridgeScore      = this.calculateItemScore(this.fridge);
  var coffeeScore      = this.calculateItemScore(this.coffee);
  // console.log(temperatureScore, fridgeScore, coffeeScore);
  //here we are going to get the number and pull it out of the mood array.
  var average = Math.round((temperatureScore + fridgeScore + coffeeScore) / 3);
  this.mood     = this.moods[average];
  console.log(average);
};

//here i am doing an if else statement for the point system in order to come up with the office mood.

ED.calculateTempScore = function calculateTempScore(){
  if (this.temperature > 22){
    return 4;
  } else if (this.temperature > 18) {
    return 3;
  } else if (this.temperature > 14) {
    return 2;
  } else if (this.temperature > 10) {
    return 1;
  } else {
    return 0;
  }
};

//here i am passing in widget, this is because coffee and fridge have the same point system as apose to temperature
ED.calculateItemScore = function calculateItemScore(widget){
  if (widget > 12){
    return 4;
  } else if (widget >= 8) {
    return 3;
  } else if (widget >= 6) {
    return 2;
  } else if (widget >= 4) {
    return 1;
  } else {
    return 0;
  }
};

// when the DOM is loaded, invoke the setup function, and bind 'this' to be the ED object
$(ED.setup.bind(ED));

//trying to figure out how to sort the mood of the office out. A scoring system in my eyes would be the best option to handle this.
//
// temp
// 22+ 5 points
// 18-22 4 points
// 18-14 3 points
// 14-10 2 points
// 10- 1 point
//
// fridge
// 10+ 5 points
// 7-9 4 points
// 4-6 3 points
// 2-3 2 points
// 0-1 1 point
//
// coffee
// 10+ 5 points
// 7-9 4 points
// 4-6 3 points
// 2-3 2 points
// 0-1 1 point
