module.exports = function(app) {
	require('./event-service.js')(app);
	require('./ee-service.js')(app);
	require('./auth-service.js')(app);
	require('./auth-interceptor.js')(app);
	require('./resource-cache-service.js')(app);
}