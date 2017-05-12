angular
.module('criminals-homework')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('criminalsIndex', {
    url: '/',
    templateUrl: '/js/views/criminals/index.html',
    controller: 'CriminalIndexController',
    controllerAs: 'criminals'
  })
  .state('criminalsShow', {
    url: '/criminals/:id',
    templateUrl: '/js/views/criminals/show.html',
    controller: 'CriminalsShowController',
    controllerAs: 'criminals'
  })
  .state('criminalsEdit', {
    url: '/criminals/:id/edit',
    templateUrl: '/js/views/criminals/edit.html',
    controller: 'CriminalsEditController',
    controllerAs: 'criminals'
  })
  .state('criminalsNew', {
    url: '/criminals/new',
    templateUrl: '/js/views/criminals/new.html',
    controller: 'CriminalsNewController',
    controllerAs: 'criminals'
  });


  $urlRouterProvider.otherwise('/');
}
