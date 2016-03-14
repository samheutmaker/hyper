module.exports = function(app) {
	app.directive('postItem', function(){
		return {
			restrict: 'AEC',
			templateUrl: 'templates/post-item.html',
			replace: true
		}
	})
}