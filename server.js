var express = require("express");
var http = require("http");
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
 
var app = express();

app.configure(
	function () {
		app.use(express.logger({ format: ':method :url' }));
		app.use(express.static(__dirname));
		app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
	}).listen(8888);
var cities = {};
fs.readFile('villes.json','utf8', function (err, data) {
  if (err) throw err;
  cities = JSON.parse(data).CITIES;
  console.log("Nb de villes chargés : "+cities.length);
});

app.get('/city', function(request, response){
	var query = querystring.parse(url.parse(request.url).query).city;
	console.log("Recherche : "+query);
	var arr=[];
	for(var i=0,nbCities=cities.length;i<nbCities;i++){
		if (cities[i].toString().toLowerCase().slice(0, query.length) == query.toString().toLowerCase()){
			arr.push(cities[i]);
		}
	}
	
	response.json(arr);
	
});
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