module.exports = function(app) {
  app.factory('Events', ['$http', 'EE',
    function($http, EE) {
      var baseURI = BASE_URI + '/api/events';
      const Events = {
        events: [],
        userEvents: [],
        getUserEvents: function(user_id) {
          return $http.get(baseURI + '/user/' + user_id);
        },
        getCurrentEvents: function() {

          var query = {
            from: new Date()
          };

          return $http.post(baseURI + '/search', query)
          .then((res) => {
            console.log('inside')
            Events.events = res.data;
          });
        },
        getEventDetails: function(eventId) {
          var eventDetails = Events.events.filter(function(el, i){
            return (el._id === eventId) ? true : false;
          })[0];

          var res = {
            data: eventDetails
          };

          return (eventDetails) ? new Promise((resolve) => resolve(res)) : $http.get(baseURI + '/detail/' + eventId);
        },
        search: function(query) {
          return $http.post(baseURI + '/search', query);
        }
      }
      return Events;
    }
  ]);
}