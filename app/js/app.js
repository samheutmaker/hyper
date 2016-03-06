var angular = require('angular');

var hyper = angular.module('hyper', []);

require('./components/events/events-index')(hyper);
require('./services/services-index')(hyper);

hyper.controller('HomeController', ['$scope',
  function($scope) {
    
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

}])