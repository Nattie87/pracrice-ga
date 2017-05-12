angular
.module('criminals-homework')
.controller('CriminalsEditController', CriminalsEditController);

CriminalsEditController.$inject = ['$stateParams', '$state', 'Criminal'];

function CriminalsEditController($stateParams, $state, Criminal) {
  const vm    = this;
  vm.criminal = Criminal.get( {id: $stateParams.id} );
  vm.update   = criminalsUpdate;

  function criminalsUpdate() {
    Criminal
      .update({ id: $stateParams.id },
      vm.criminal)
      .$promise
      .then(() => {
        $state.go('criminalsIndex');
      });
  }
}
