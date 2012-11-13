var express = require("express");
var http = require("http");
var url = require('url');
 
var app = express();

app.configure(
	function () {
		app.use(express.logger({ format: ':method :url' }));
		app.use(express.static(__dirname));
		app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
	}).listen(8888);

app.get('/search', function(request, response){

	var query = url.parse(request.url).search;
	var options = {
		host: 'search.twitter.com',
		port: 80,
		path: '/search.json'+query,
		method: 'GET'
		};

	var myJSON = '';
	var req = http.request(options, function(res) {
		console.log('<<STATUS: ' + res.statusCode);
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			myJSON+=chunk;
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.on('close', function(){
		response.json(JSON.parse(myJSON));
	});
	req.end();

});