angular
.module('criminals-homework')
.controller('CriminalsNewController', CriminalsNewController);

CriminalsNewController.$inject = ['$state', 'Criminal'];

function CriminalsNewController($state, Criminal) {
  const vm = this;

  vm.create = criminalsCreate;

  function criminalsCreate() {
    if (vm.newCriminalForm.$valid) {
      Criminal
      .save(vm.criminal)
      .$promise
      .then(() => {
        $state.go('criminalsIndex');
      });
    }

  }
}
