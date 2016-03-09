module.exports = function(app) {
  app.factory('Events', ['$http', 'EE',
    function($http, EE) {
    	var baseURI = BASE_URI + '/api/events';
    	const Events = {
    		events: {},
    		userEvents: {},
    		getUserEvents: function(user_id) {
    			return $http.get(baseURI + '/user/' + user_id);
    		},
    		search: function(query) {
    			return $http.post(baseURI + '/search', query);
    		}
    	}

    	return Events;
    }]);
}