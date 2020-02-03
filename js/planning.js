// var percentage;
// var locale;
// var avail;
// var trans;
// var society;
// var market;
// var data;




google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart);
function drawChart(locale,avail,trans,society,market) {

  var data = google.visualization.arrayToDataTable([
    ['Features', 'Percentage'],
    ['Locality',     locale],
    ['Availability',    avail],
    ['Transportation',  trans],
    ['Society', society],
    ['Market',    market]
  ]);

  var options = {
    title: 'Worth by Utilities'
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  
  
  
}
var x;
function utility(val){
    x = val;
}
  ////////////////crime rate chart starts//////////////
function graph(){
    data = document.getElementById("area").value;

    if(data==1){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(10,12,2,8,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }

    if(data==2){
        if(x == 1)
        drawChart(10,14,16,18,10);
        if(x == 2)
        drawChart(14,10,05,1,15);
        if(x == 3)
        drawChart(14,12,12,8,19);
        if(x == 4)
        drawChart(14,17,6,19,9);
    }
    if(data==3){
        if(x == 1)
        drawChart(10,32,26,18,9);
        if(x == 2)
        drawChart(10,15,6,9,16);
        if(x == 3)
        drawChart(15,23,12,28,19);
        if(x == 4)
        drawChart(14,12,9,12,44);
    }
    if(data==4){
        if(x == 1)
        drawChart(10,32,16,40,9);
        if(x == 2)
        drawChart(10,20,14,18,12);
        if(x == 3)
        drawChart(10,12,12,18,19);
        if(x == 4)
        drawChart(14,12,12,9,19);
    }
    if(data==5){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(10,12,2,8,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==6){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(10,12,2,8,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==7){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,28,9);
        if(x == 3)
        drawChart(10,12,22,8,23);
        if(x == 4)
        drawChart(14,12,26,19,9);
    }
    if(data==8){
        if(x == 1)
        drawChart(10,22,6,17,9);
        if(x == 2)
        drawChart(10,30,16,18,9);
        if(x == 3)
        drawChart(10,16,23,8,19);
        if(x == 4)
        drawChart(21,12,24,17,9);
    }
    if(data==9){
        if(x == 1)
        drawChart(10,12,5,8,9);
        if(x == 2)
        drawChart(10,15,16,28,9);
        if(x == 3)
        drawChart(20,12,12,8,19);
        if(x == 4)
        drawChart(14,14,16,19,9);
    }
    if(data==10){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(10,12,2,8,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==11){
        if(x == 1)
        drawChart(10,12,6,8,19);
        if(x == 2)
        drawChart(10,20,16,18,9);
        if(x == 3)
        drawChart(10,12,12,8,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==12){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,25,16,18,9);
        if(x == 3)
        drawChart(10,12,2,8,24);
        if(x == 4)
        drawChart(14,12,26,9,9);
    }
    if(data==13){
        if(x == 1)
        drawChart(10,34,14,2,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(10,12,12,8,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==14){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(10,32,2,8,19);
        if(x == 4)
        drawChart(14,12,16,19,9);
    }
    if(data==15){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(12,15,2,8,19);
        if(x == 4)
        drawChart(15,12,6,9,9);
    }
    if(data==16){
        if(x == 1)
        drawChart(10,42,6,8,9);
        if(x == 2)
        drawChart(10,20,26,18,9);
        if(x == 3)
        drawChart(10,12,2,14,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==17){
        if(x == 1)
        drawChart(10,12,6,18,9);
        if(x == 2)
        drawChart(10,20,6,8,9);
        if(x == 3)
        drawChart(15,12,6,9,9);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==18){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(15,12,6,9,9);
        if(x == 3)
        drawChart(10,12,2,8,19);
        if(x == 4)
        drawChart(14,12,16,9,9);
    }
    if(data==19){
        if(x == 1)
        drawChart(10,12,6,8,9);
        if(x == 2)
        drawChart(10,20,6,18,9);
        if(x == 3)
        drawChart(10,12,2,8,19);
        if(x == 4)
        drawChart(15,12,6,9,9);
    }
    
}

