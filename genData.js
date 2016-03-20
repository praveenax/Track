var fs = require('fs');
var jsonfile = require('jsonfile')


var jsonArray = [];

function genValues(){
    var tmp = [];
   for(var i=0;i<100;i++){
       var obj = {};
       
       obj.i=""+i;
       
       obj.value=""+getRandomInt(4,120);
       
       obj.v1=""+getRandomInt(4,120);
       obj.v2=""+getRandomInt(4,120);
       obj.v3=""+getRandomInt(4,120);
       
       tmp.push(obj);
       
   }
    
    
    
    return tmp;
}

 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    
var jsonArray = genValues();

var str = JSON.stringify(jsonArray);

jsonfile.writeFile("DATASET/testdata.js", jsonArray, function (err) {
        console.error(err);
    });

//read from file
//fs.createReadStream("DATASET/"+options["src"][1]).pipe(converter);