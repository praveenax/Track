var express = require('express');
var app = express();


var compareData = "";

var memoryJson;

var ACCURACY_LEVEL = 0.7;

app.use(express.static('client'));


app.get('/', function (req, res) {


    res.sendfile('client/index.html');

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Mylan App listening at http://%s:%s', host, port);
});


//this