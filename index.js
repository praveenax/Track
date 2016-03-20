var express = require('express');
var predict = require("brain-predict") ;
var app = express();


var compareData = "";

var memoryJson;

var ACCURACY_LEVEL = 0.7;

app.use(express.static('client'));


app.get('/', function (req, res) {


    res.sendfile('client/index.html');

});

app.get('/predict', function (req, res) {

    var config = {
	// how many steps to predict
	predictionSteps : 8,
	// how many steps use for each training pattern
	step : 4,
	// input data
	serie : [
		1198,2093,3274,1156,
		1232,2112,3398,1285,
		1297,2220,3876,1456,
		1434,2473,4213,1506,
		1602,2504,4594,1638,
		1746,2672,4852,1932,
		1978,2916,4976,2031,
		2012,2944,4947,2194,
		2213,3253,5033,2328,
		1981,3015,4811,2058,
		2017,2970,4768,2081,
		2093,3067,4879,2116
	]  
}

    res.sendfile('client/index.html');

});




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Mylan App listening at http://%s:%s', host, port);
});


//this