//RUN
//nodejs csv2json.js --src singapore.js singapore.csv

var fs = require('fs');
var jsonfile = require('jsonfile')
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var commandLineArgs = require('command-line-args');
 
var cli = commandLineArgs([
  { name: 'verbose', alias: 'v', type: Boolean },
  { name: 'src', type: String, multiple: true, defaultOption: true },
  { name: 'timeout', alias: 't', type: Number }
])


var options = cli.parse();
//console.log(options);


//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function (jsonArray) {


    jsonfile.writeFile("DATASET/"+options["src"][0], jsonArray, function (err) {
        console.error(err);
    })
});

//read from file
fs.createReadStream("DATASET/"+options["src"][1]).pipe(converter);
