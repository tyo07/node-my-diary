module.exports = function Database(config){
	var cassandra = require('cassandra-driver'),
		options = {
			contactPoints: config.contactPoints,
			localDataCenter: config.localDataCenter,
			// authProvider: new cassandra.auth.PlainTextAuthProvider(config.user, config.password),
			keyspace: config.keyspace
		},
		client = new cassandra.Client(options);

	return client;
};
