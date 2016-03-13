module.exports = function(app) {
  app.directive('eventControls', function() {
    return {
      restrict: 'AEC',
      templateUrl: 'templates/controls.html',
      replace: true,
      transclude: true,
      controller: function($scope, Events, EE, $window, $interval, $timeout) {

        // Scope
        $scope.userEvents = [];
        $scope.events = [];
        $scope.userId = $window.sessionStorage._id;



        // Track State
        $scope.state = {
          userEvents: true,
          searching: false,
          map: false,
          showControls: true,
          filter: ""
        };

        // Animation
        // $timeout(function() {
        //   $scope.state.showControls = true
        // }, 10);


        // Get current events
        $scope.getCurrentEvents = function() {
          if (Events.events.length) {
            // $timeout(function(){
              $scope.events = Events.events;  
            // }, 250);
          } else {
            Events.getCurrentEvents()
              .then(() => {
                $scope.events = Events.events;
              });
          }
        }


        // Get User Events
        $scope.getUserEvents = function() {
          Events.getUserEvents($scope.userId)
            .then((res) => {
              $scope.userEvents = res.data;
              $scope.events = $scope.userEvents;
            }, function(err) {
              console.log(err);
            });
        };

      }
    }
  });
}