module.exports = function(app) {
  app.factory('Events', ['$http',
    function($http) {
      const baseURI = 'http://localhost:8888';
      const eventService = {
      	// Search Events
        search: function(queryObj, callback) {
        	$http.post(baseURI + '/api/events/search/', queryObj)
        	.then(function(res) {
        		calllback(null, res.data);
        	}, function(err) {
        		callback(err);
        	});
        }
      }
    }
  ])
}