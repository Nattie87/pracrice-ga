angular
  .module('CardsAgainstAssembly')
  .controller('PlayersCtrl', PlayersCtrl);

PlayersCtrl.$inject = [];
function PlayersCtrl(){
  const vm = this;
  
  vm.all = [
    { name: 'Gilligan', points: 2 },
    { name: 'Mary Ann', points: 16 },
    { name: 'Ginger', points: 12 },
    { name: 'Thurson', points: 6 },
    { name: 'Skipper', points: 9 },
    { name: 'The Professor', points: 21 }
  ];
}
