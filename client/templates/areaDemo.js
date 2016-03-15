



function builtArea() {

console.log(Enviroment.find({}).fetch());
var array1 =Enviroment.find({}).fetch();
var array2 =Light.find({}).fetch();
var array3 =Moisture.find({}).fetch();
var array4 =Temperature.find({}).fetch();
    var dataset1=[];
    var dataset2=[];
    var dataset3=[];
    var dataset4=[];
for(var obj in array1){

    dataset1.push(array1[obj].value);
    dataset2.push(array2[obj].value);
    dataset3.push(array3[obj].value);
    dataset4.push(array4[obj].value);
}

    $('#container-area').highcharts({

        chart: {
            type: 'line'
        },

        title: {
            text: 'Arduino TOLL'
        },

        credits: {
            enabled: false
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },

        yAxis: {
            title: {
                text: ''
            }
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'x = {point.x}, y = {point.y}'
        },

        series: [{
            name: 'Earth Humidity (%)',
            data: dataset3
        },{
            name: 'Environment Humidity (%)',
            data: dataset1
        },{
            name: 'Light (%)',
            data: dataset2
        },{
            name: 'Temperature (°C)',
            data: dataset4
        }
        ]
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.areaDemo.rendered = function () {
    Tracker.autorun(function () {
       builtArea();

    });
}


Template.areaDemo.events({
  'click #add':function(){
    Enviroment.insert({
      value:Math.floor(Math.random() * 100)+500
    });
  },
  'click #remove':function(){
    var toRemove = Enviroment.findOne();
    Enviroment.remove({_id:toRemove._id});
  },
  'click #randomize':function(){
    //loop through bars
    Enviroment.find({}).forEach(function(point){
      Enviroment.update({_id:point._id},{$set:{value:Math.floor(Math.random() * 100)+500}});
    });
  }
});
