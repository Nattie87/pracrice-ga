# Angular Lab

### Introduction

Your task is to take the starter code provided, set up an Angular app that loops through an array of donuts and displays them on the page. When the form is submitted, a new donut should be pushed into the array.

Use the completed Todo app and the notes from the lesson to complete this lab.

<img src="http://i.imgur.com/dqWWDeI.png" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

> Note: The Angular CDN has already been included in the head of the `index.html` file for you.

### Tasks

* Set up your Angular app
* Create a donuts controller (`DonutsCtrl`) in your `app.js` file
* Add the following data to your donuts controller:

```
[
  { 'style': 'Old Fashioned', 'flavor': 'Chocolate' },
  { 'style': 'Cake', 'flavor': 'Coconut' },
  { 'style': 'Yeast', 'flavor': 'Frosted' },
  { 'style': 'Glazed', 'flavor': 'Plain' },
  { 'style': 'Cruller', 'flavor': 'Plain' },
  { 'style': 'Cream', 'flavor': 'Boston Creme' },
  { 'style': 'Jelly', 'flavor': 'Raspberry' },
  { 'style': 'French Cruller', 'flavor': 'Strawberry' },
  { 'style': 'Fritter', 'flavor': 'Apple' }
];
```

* Use `ngRepeat` to render the data on your page
* Use `ngSubmit` and `ngModel` to hook up your form

### Resources

* [ngRepeat documentation](https://docs.angularjs.org/api/ng/directive/ngRepeat)
* [ngSubmit documentation](https://docs.angularjs.org/api/ng/directive/ngSubmit)
* [ngModel documention](https://docs.angularjs.org/api/ng/directive/ngModel)

### Bonus 

Use [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy) to display the donuts in alphabetical order (by flavor).