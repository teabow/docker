var Deepstream = require( 'deepstream.io' );
var RethinkDBStorageConnector = require( 'deepstream.io-storage-rethinkdb' );
var RedisMessageConnector = require( 'deepstream.io-msg-redis' );
var RedisCacheConnector = require( 'deepstream.io-cache-redis' );

var deepstream = new Deepstream();

deepstream.set( 'messageConnector', new RedisMessageConnector( { 
	port: 6379, 
	host: 'redis' 
}));

deepstream.set( 'cache', new RedisCacheConnector( { 
	port: 6379, 
	host: 'redis' 
}));

deepstream.set( 'storage', new RethinkDBStorageConnector( { 
	port: 28015, 
	host: 'rethinkdb',
	splitChar: '/'
}));

deepstream.start();