module.exports = function(app) {
  app.directive('eventContainer', function() {
    return {
      restrict: 'AE',
      templateUrl: 'templates/event-container.html',
      replace: true,
      scope: {
        events: '='
      },
      controller: function($scope) {


      }
    }
  })
}