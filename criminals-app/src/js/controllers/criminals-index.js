angular
.module('criminals-homework')
.controller('CriminalIndexController', CriminalIndexController);

CriminalIndexController.$inject = ['Criminal'];

function CriminalIndexController(Criminal) {
  const vm = this;
  vm.delete = criminalsDelete;

  criminalsIndex();

  function criminalsIndex() {
    vm.criminals = Criminal.query();
  }

  function criminalsDelete(criminal) {
    Criminal
    .remove({ id: criminal._id })
    .$promise
    .then(() => {
      criminalsIndex();
    });
  }
}
