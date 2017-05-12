angular
.module('criminals-homework')
.controller('CriminalsShowController', CriminalsShowController);


CriminalsShowController.$inject = ['$stateParams', 'Criminal'];

function CriminalsShowController($stateParams, Criminal) {
  const vm = this;
  vm.criminal = Criminal.get( {id: $stateParams.id }) ;
}
