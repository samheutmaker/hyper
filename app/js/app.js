var angular = require('angular');

require('angular-route');
require('angular-animate');

var hyper = angular.module('hyper', ['ngRoute', 'ngAnimate']);

require('./components/events/events-index')(hyper);
require('./components/controls/controls-index')(hyper);
require('./components/auth/auth-index')(hyper);
require('./services/services-index')(hyper);

hyper.config(['$routeProvider', '$locationProvider',
  function($routeP, $locationP) {
    $routeP
    .when('/list', {
      templateUrl: 'views/events.html'
    })
  }])



// Add Token Middleware
hyper.config(function($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})
  .run(function($window, EE, $rootScope) {
    if ($window.sessionStorage.token && $window.sessionStorage._id) {
      $rootScope.authenticated = true;
    }
  })

hyper.controller('NavController', ['$scope',
  function($scope) {

  }
]);

hyper.controller('HomeController', ['$scope',
  function($scope) {

    $scope.showEvents = false;

    $scope.$on('USER_AUTHENTICATED', function() {
      $scope.showEvents = true;
    })
  }
]);

hyper.controller('EventPageController', ['$scope',
  function($scope) {


  }
])