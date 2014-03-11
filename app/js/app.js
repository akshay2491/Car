'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
 
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'FirstCtrl'});
  $routeProvider.when('/anim', {templateUrl: 'partials/anim.html', controller: 'FirstCtrl'});
  $routeProvider.when('/view3', {templateUrl: 'partials/start.html', controller: 'FirstCtrl'});
  $routeProvider.when('/DesignPhase', {templateUrl: 'partials/DesignPhase.html', controller: 'FirstCtrl'});
  $routeProvider.when('/ConstructPhase', {templateUrl: 'partials/ConstructPhase.html', controller: 'FirstCtrl'});
  $routeProvider.when('/MainPhase', {templateUrl: 'partials/MainPhase.html', controller: 'FirstCtrl'});
  
  $routeProvider.when('/FinalPhase', {templateUrl: 'partials/FinalPhase.html', controller: 'FirstCtrl'});

  
  
  $routeProvider.when('/SecPhase', {templateUrl: 'partials/SecPhase.html', controller: 'FirstCtrl'});
    $routeProvider.when('/Details/:id', {templateUrl: 'partials/Detailed.html', controller: 'secondCtrl'});
}]);

