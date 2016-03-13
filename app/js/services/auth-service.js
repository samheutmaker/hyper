// Handles Token Retrevial and Creation
module.exports = function(app) {
  app.factory('AuthFactory', ['$http',
    function($http) {
      var baseURI = 'http://192.168.99.100:8888/auth'
      return {
        login: function(data) {

          var headerData = data.email + ':' + data.password;
          var headerData = btoa(headerData);

          return $http({
            method: 'GET',
            url: baseURI + '/login',
            headers: {
              authorization: 'Basic ' + headerData
            }
          });
        },
        register: function(data) {
          var toSend = {
            authentication: {
              email: data.email,
              password: data.password
            }
          };

          return $http({
            method: 'POST',
            url: baseURI + '/register',
            data: toSend
          });
        }
      }
    }
  ]);
}