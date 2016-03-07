var angular = require('angular');

var hyper = angular.module('hyper', []);

require('./components/events/events-index')(hyper);
require('./components/auth/auth-index')(hyper);
require('./services/services-index')(hyper)




// Add Token Middleware
hyper.config(function($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})
  .run(function($window, EE, $rootScope) {
    if ($window.sessionStorage.token && $window.sessionStorage._id) {
      $rootScope.authenticated = true;
    }
  })


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

    $scope.events = [{
      _id: 12345,
      name: 'another'
    }, {
      _id: 12345,
      name: 'another'
    }, {
      _id: 12345,
      name: 'another'
    }];

  }
])