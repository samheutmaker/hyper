var angular = require('angular');

require('angular-route');
require('angular-animate');

var hyper = angular.module('hyper', ['ngRoute', 'ngAnimate']);

require('./components/auth/auth-index')(hyper);
require('./components/post/post-index')(hyper);
require('./components/events/events-index')(hyper);
require('./components/controls/controls-index')(hyper);
require('./services/services-index')(hyper);

hyper.config(['$routeProvider', '$locationProvider',
  function($routeP, $locationP) {
    $routeP
      .when('/list', {
        templateUrl: 'views/events.html'
      })
      .when('/post', {
        templateUrl: 'views/post.html'
      })
      .when('/event/:eventId', {
        templateUrl: 'views/detail.html'
      })
  }
]);



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

hyper.controller('PostPageController', ['$scope',
  function($scope) {

    // Track state
    $scope.state = {
      creating: false,
    };
      
    // Create new post
    $scope.newPost = function() {
      $scope.creating = true;
    }

  }
]);

hyper.controller('EventPageController', ['$scope',
  function($scope) {


  }
]);

hyper.controller('DetailPageController', ['$scope', '$routeParams', 'Events',
  function($scope, $routeParams, Events) {

    $scope.eventDetails = null;

    Events.getEventDetails($routeParams.eventId).then(function(eventDetails) {
      $scope.eventDetails = eventDetails.data;
      console.log($scope.eventDetails);
    });


  }
]);