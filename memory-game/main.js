
var gameBoard = document.getElementById("game-board");
var newCard = document.getElementsByClassName("cards");
var cards = ["queen", "king", "queen", "king"];
var cardInPlay = [];


var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = "card";
        newCard.setAttribute('data-card', cards[i]);
        newCard.addEventListener('click', isTwoCards);
        gameBoard.appendChild(newCard);
    }
};
function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
		this.innerHTML = '<img src="Beyonce.jpg' + this.getAttribute('data-card') + 'beyonce2.jpg">'
	  	if (cardInPlay.length === 2) {
		isMatch(cardInPlay);
		cardInPlay = [];
	}
};

var isMatch = function(array) {
	if (array[0] === array[1]) {
      alert("Yay! You found a match!");}
  else { alert("Better luck next time!");}
    for (var i = 0; i < cards.length; i++) {
    document.getElementsByClassName('card')[i].innerHTML = " ";
  }
};
/* Not sure which version works!
var isMatch = function(array) {
	(array[0] === array[1]) ? alert("Yay! You found a match!") : alert("Better luck next time!");
    for (var i = 0; i < cards.length; i++) {
    document.getElementsByClassName('card')[i].innerHTML = " ";
  }
};*/
createBoard();
