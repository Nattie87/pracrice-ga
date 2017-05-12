$(document).ready(function(){
  console.log('hello');

  // var addCount;
  // var clearGame;
  // var newGame;
  // var playGame;
  // var clearPlayer;
  // var shade;
  // var playerTurn;
  // var showMoves;
  // var nextLevel;
  var game = {
    count: 0,
    possibilities: ['#green','#blue', '#red', '#yellow', '#purple'],
    currentGame: [],
    player: []
  };

  game.newGame = function() {
    game.clearGame();
  };

  game.clearGame = function clearGame() {
    game.currentGame = [];
    game.count = 0;
    game.addCount();
  };


  game.showMoves = function showMoves() {
    var i = 0;
    var moves = setInterval(function(){
      game.playGame(game.currentGame[i]);
      i++;
      if (i >= game.currentGame.length) {
        clearInterval(moves);
      }
    }, 600);

    game.clearPlayer();
  };

  game.shade = function shade(name) {
    console.log(name);
    switch(name) {
      case'#green':
      $(name).css('background-color', 'green');
      break;
      case '#blue':
      $(name).css('background-color', 'blue');
      break;
      case '#red':
      $(name).css('background-color', 'red');
      break;
      case '#yellow':
      $(name).css('background-color', 'yellow');
      break;
      case '#purple':
      $(name).css('background-color', 'purple');
      break;
    }
  };

  game.playGame = function playGame(field) {
    $(field).addClass('hover');
    game.shade(field);
    setTimeout(function(){
      $(field).removeClass('hover');
    }, 300);
  };

  game.clearPlayer = function clearPlayer() {
    game.player = [];
  };

  game.addToPlayer = function addToPlayer(id) {
    var field = '#'+id;
    console.log(field);
    game.player.push(field);
    game.playerTurn(field);
  };

  game.playerTurn = function playerTurn(x) {
    if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
      if(game.strict){
        alert('Sorry not right');
        game.newGame();
      } else {
        alert('Wrong!');
        game.showMoves();
      }
    } else {
      game.shade(x);
      var check = game.player.length === game.currentGame.length;
      if (check) {
        if(game.count === 20){
          alert('Aced it!');
        } else {
          alert('Nice one, new round');
          game.nextLevel();
        }
      }
    }
  };

  game.nextLevel = function nextLevel() {
    game.addCount();
  };

  game.generateMove = function generateMove(){
    game.currentGame.push(game.possibilities[(Math.floor(Math.random()*5))]);
    game.showMoves();
  };

  game.addCount = function addCount() {
    game.count++;
    $('#clickNumber').addClass('animated fadeOutDown');

    setTimeout(function(){
      $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
    }, 200);
    game.generateMove();
  };

  game.newGame();

});
