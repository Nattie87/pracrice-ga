angular
  .module('CardsAgainstAssembly')
  .controller('CardsCtrl', CardsCtrl);

CardsCtrl.$inject = [];
function CardsCtrl(){
  const vm = this;

  vm.all = [
    {
      question: 'What is Batman\'s guilty pleasure?' },
    { question: 'I\'m sorry professor, I couldn\'t complete my homework because _________.' },
    { question: 'I get by with a little help from _________.' },
    { question: '_________. It\'s a trap!' },
    { question: 'The class field trip was completely ruined by _________.' },
    { question: 'What\'s my secret power?' }
  ];
}
