angular
  .module('donutApp', [])
  .controller('DonutsCtrl', DonutsCtrl);

function DonutsCtrl() {
  const vm = this;
  vm.all = [
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

  vm.newDonut = {};
  vm.donutsCreate = donutsCreate;
  vm.donutsDelete = donutsDelete;

  function donutsCreate() {
    vm.all.push(vm.newDonut);
    vm.newDonut = {};
  }

  function donutsDelete(donut) {
    const index = vm.all.indexOf(donut);
    vm.all.splice(index, 1);
  }

}
