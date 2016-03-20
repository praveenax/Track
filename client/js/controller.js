myApp.controller('cntrl', function ($scope, $http) {
    $scope.itemList = [
        {
            a: 1,
            name: "Home",
            link: "/"
        },
        {
            a: 1,
            name: "World Bank Data - India",
            link: "/wbdIndia"
        },
        {
            a: 1,
            name: "World Bank Data - Singapore",
            link: "/wbdSing"
        }

    ];



});

myApp.controller('feedContrl', function ($scope, $http) {


    var map = new Datamap({
        element: document.getElementById('container'),

        fills: {

            defaultFill: '#EDDC4E'
        },
        data: {

        }
    });



});


//wbdCntrl
myApp.controller('wbdCntrl', function ($scope, $http) {
    
    $scope.countryName = "India";
    
    var dataValue = [];
    var dataValue2 = [];
    console.log(indiaData);

    //build labels
    var labels = [];
    for (var i = 30; i < 61; i++) {
        labels.push(indiaData[3]["field" + i]);

    }

    var fieldNames = [""];
    for (var i = 4; i < indiaData.length - 5; i++) {
        fieldNames.push(indiaData[i]["field3"]);

    }

    // console.log(fieldNames);

    $scope.dropValues = fieldNames;
    $scope.allDropValues = fieldNames;





    var ctx = $("#myChart").get(0).getContext("2d");
    var data = {
        labels: labels,
        datasets: [
            {
                label: "" + $scope.graphSelectValue,
                fillColor: "rgba(0,220,220,1)",
                strokeColor: "rgba(0,220,220,1)",
                highlightFill: "rgba(0,220,220,1)",
                highlightStroke: "rgba(0,220,220,1)",
                data: dataValue
        }, {
                label: "" + $scope.graphSelectValue,
                fillColor: "rgba(220,0,220,1)",
                strokeColor: "rgba(220,0,220,1)",
                highlightFill: "rgba(220,0,220,1)",
                highlightStroke: "rgba(220,0,220,1)",
                data: dataValue2
        }
    ]
    };

    var options = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - If there is a stroke on each bar
        barShowStroke: true,

        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };

    var myBarChart = new Chart(ctx).Bar(data, options);


    $scope.onSelectUpdate = function () {

        console.log($scope.graphSelectValue);
        dataValue = [];
        dataValue2 = [];

        for (var i = 4; i < indiaData.length - 5; i++) {
            // fieldNames.push(indiaData[i]["field3"]);
            if (indiaData[i]["field3"] == $scope.graphSelectValue) {
                for (var j = 30; j < 61; j++) {

                    var tmp = indiaData[i]["field" + j];

                    if (tmp == "" || tmp == undefined) {
                        dataValue.push(0);
                    } else {

                        dataValue.push(tmp);
                    }


                }
                // dataValue.push();
                console.log(dataValue);
                break;
            }


        }
        
        for (var i = 4; i < indiaData.length - 5; i++) {
            // fieldNames.push(indiaData[i]["field3"]);
            if (indiaData[i]["field3"] == $scope.graphSelectValue2) {
                for (var j = 30; j < 61; j++) {

                    var tmp = indiaData[i]["field" + j];

                    if (tmp == "" || tmp == undefined) {
                        dataValue2.push(0);
                    } else {

                        dataValue2.push(tmp);
                    }


                }
                // dataValue.push();
                console.log(dataValue2);
                break;
            }


        }

        data = {
            labels: labels,
            datasets: [
                {
                    label: "" + $scope.graphSelectValue,
                    fillColor: "rgba(0,220,220,0)",
                    strokeColor: "rgba(0,220,220,1)",
                    highlightFill: "rgba(0,220,220,1)",
                    highlightStroke: "rgba(0,220,220,1)",
                    data: dataValue
        }, {
                    label: "" + $scope.graphSelectValue2,
                    fillColor: "rgba(220,0,220,0)",
                    strokeColor: "rgba(220,0,220,1)",
                    highlightFill: "rgba(220,0,220,1)",
                    highlightStroke: "rgba(220,0,220,1)",
                    data: dataValue2
        }
    ]
        };

        myBarChart.destroy();
        var ctx = document.getElementById("myChart").getContext("2d");
        myBarChart = new Chart(ctx).Bar(data, options);
        
        if($scope.type == "line"){
            myBarChart = new Chart(ctx).Line(data, options);
            
        }else{
            myBarChart = new Chart(ctx).Bar(data, options);
            
        }


    }


    $scope.onFilter = function () {
        var filterValue = $scope.fieldSearch;
        var filtered = [];
        
        $scope.dropValues = $scope.allDropValues;

        for (var i = 0; i < $scope.dropValues.length; i++) {
            if ($scope.dropValues[i].indexOf("" + filterValue) != -1) {
                filtered.push($scope.dropValues[i]);

            }
        }

        $scope.dropValues = filtered;

    }


});


myApp.controller('wbdCntrl2', function ($scope, $http) {
    
    $scope.countryName = "Singapore";
    var dataValue = [];
    var dataValue2 = [];
    console.log(singaporeData);

    //build labels
    var labels = [];
    for (var i = 30; i < 61; i++) {
        labels.push(indiaData[3]["field" + i]);

    }

    var fieldNames = [""];
    for (var i = 4; i < indiaData.length - 5; i++) {
        fieldNames.push(indiaData[i]["field3"]);

    }

    // console.log(fieldNames);

    $scope.dropValues = fieldNames;
    $scope.allDropValues = fieldNames;





    var ctx = $("#myChart").get(0).getContext("2d");
    var data = {
        labels: labels,
        datasets: [
            {
                label: "" + $scope.graphSelectValue,
                fillColor: "rgba(0,220,220,1)",
                strokeColor: "rgba(0,220,220,1)",
                highlightFill: "rgba(0,220,220,1)",
                highlightStroke: "rgba(0,220,220,1)",
                data: dataValue
        }, {
                label: "" + $scope.graphSelectValue,
                fillColor: "rgba(220,0,220,1)",
                strokeColor: "rgba(220,0,220,1)",
                highlightFill: "rgba(220,0,220,1)",
                highlightStroke: "rgba(220,0,220,1)",
                data: dataValue2
        }
    ]
    };

    var options = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - If there is a stroke on each bar
        barShowStroke: true,

        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };

    var myBarChart = new Chart(ctx).Bar(data, options);


    $scope.onSelectUpdate = function () {

        console.log($scope.graphSelectValue);
        dataValue = [];
        dataValue2 = [];

        for (var i = 4; i < indiaData.length - 5; i++) {
            // fieldNames.push(indiaData[i]["field3"]);
            if (indiaData[i]["field3"] == $scope.graphSelectValue) {
                for (var j = 30; j < 61; j++) {

                    var tmp = indiaData[i]["field" + j];

                    if (tmp == "" || tmp == undefined) {
                        dataValue.push(0);
                    } else {

                        dataValue.push(tmp);
                    }


                }
                // dataValue.push();
                console.log(dataValue);
                break;
            }


        }
        
        for (var i = 4; i < indiaData.length - 5; i++) {
            // fieldNames.push(indiaData[i]["field3"]);
            if (indiaData[i]["field3"] == $scope.graphSelectValue2) {
                for (var j = 30; j < 61; j++) {

                    var tmp = indiaData[i]["field" + j];

                    if (tmp == "" || tmp == undefined) {
                        dataValue2.push(0);
                    } else {

                        dataValue2.push(tmp);
                    }


                }
                // dataValue.push();
                console.log(dataValue2);
                break;
            }


        }

        data = {
            labels: labels,
            datasets: [
                {
                    label: "" + $scope.graphSelectValue,
                    fillColor: "rgba(0,220,220,0)",
                    strokeColor: "rgba(0,220,220,1)",
                    highlightFill: "rgba(0,220,220,1)",
                    highlightStroke: "rgba(0,220,220,1)",
                    data: dataValue
        }, {
                    label: "" + $scope.graphSelectValue2,
                    fillColor: "rgba(220,0,220,0)",
                    strokeColor: "rgba(220,0,220,1)",
                    highlightFill: "rgba(220,0,220,1)",
                    highlightStroke: "rgba(220,0,220,1)",
                    data: dataValue2
        }
    ]
        };

        myBarChart.destroy();
        var ctx = document.getElementById("myChart").getContext("2d");
        myBarChart = new Chart(ctx).Bar(data, options);
        
        if($scope.type == "line"){
            myBarChart = new Chart(ctx).Line(data, options);
            
        }else{
            myBarChart = new Chart(ctx).Bar(data, options);
            
        }


    }


    $scope.onFilter = function () {
        var filterValue = $scope.fieldSearch;
        var filtered = [];
        
        $scope.dropValues = $scope.allDropValues;

        for (var i = 0; i < $scope.dropValues.length; i++) {
            if ($scope.dropValues[i].indexOf("" + filterValue) != -1) {
                filtered.push($scope.dropValues[i]);

            }
        }

        $scope.dropValues = filtered;

    }


});


