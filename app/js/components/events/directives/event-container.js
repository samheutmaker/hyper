module.exports = function(app) {
  app.directive('eventContainer', function() {
    return {
      restrict: 'AE',
      templateUrl: 'templates/event-container.html',
      replace: true,
      scope: {
        events: '=',
        filter: '='
      },
      link: function($scope) {
        $scope.$watch(function(){
          return $scope.filter;
        }, function(){
          console.log($scope.filter);
        })
      },
      controller: function($scope) {


      }
    }
  })
}