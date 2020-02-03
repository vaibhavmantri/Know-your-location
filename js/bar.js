// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         theme: "light2", // "light1", "light2", "dark1", "dark2"
//         title:{
//             text: "Changes in Crime Rate."
//         },
//         axisY: {
//             title: ""
//         },
//         data: [{        
//             type: "column",  
//             showInLegend: true, 
//             legendMarkerColor: "grey",
//             legendText: "MMbbl = one million barrels",
//             dataPoints: [      
//                 { y: 300878, label: "Venezuela" },
//                 { y: 266455,  label: "Saudi" },
//                 { y: 169709,  label: "Canada" },
//                 { y: 158400,  label: "Iran" },
//                 { y: 142503,  label: "Iraq" },
//                 { y: 101500, label: "Kuwait" },
//                 { y: 97800,  label: "UAE" },
//                 { y: 80000,  label: "Russia" }
//             ]
//         }]
//     });
//     chart.render();
    
//     }
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Change in Crime rate in past years"
        },	
        axisY: {
            title: "Number of injuries",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Number of deaths",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },	
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "",
            legendText: "Number of Injuries",
            showInLegend: true, 
            dataPoints:[
                { label: "2014", y: 266.21 },
                { label: "2015", y: 302.25 },
                { label: "2016", y: 157.20 },
                { label: "2017", y: 148.77 },
                { label: "2018", y: 101.50 },
                { label: "2019", y: 97.8 }
            ]
        },
        {
            type: "column",	
            name: "",
            legendText: "Number of Deaths",
            axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "2014", y: 10.46 },
                { label: "2015", y: 2.27 },
                { label: "2016", y: 3.99 },
                { label: "2017", y: 4.45 },
                { label: "2018", y: 2.92 },
                { label: "2019", y: 3.1 }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }
