module.exports = function(app) {
	app.directive('eventControls', function(){
		return {
			restrict: 'AEC',
			templateUrl: 'templates/controls.html',
			replace: true,
			transclude: true,
			controller: function($scope, Events, EE, $window, $interval) {

				// Scope
				$scope.userEvents = [];
				$scope.events = [];
				$scope.userId = $window.sessionStorage._id;
				$scope.filter = "";

				$interval(function() {
					console.log($scope.filter);
				}, 1000);

				// Track State
				$scope.state = {
					userEvents: true,
					searching: false,
					map: false
				};



				// Get User Events
				$scope.getUserEvents = function(){
					Events.getUserEvents($scope.userId)
					.then(function(res){
						console.log(res);
						$scope.userEvents = res.data;
						$scope.events = $scope.userEvents;
					},function(err){
						console.log(err);
					})
				};

				$scope.getUserEvents();




			}
		}
	})
}