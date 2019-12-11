



    //BAR GRAPH FOR STATE COUNT
function drawPieChartForStateCount(objArray){
    console.log('in drawPieChart')
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
            var states = getStateCount(objArray)   //this creates the states array
            var statesSet = states.uniqueSet //this gets the unique states

              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'State');
              data.addColumn('number', 'Population');

                  statesSet.forEach( (ar)=>{
                          if( ar !== undefined){
                              data.addRows([  [ar , states.tally[ar] ] ]); //this creates the graph
                          }
                   })

   var options = {'title':'State Pie Graph', 'width':500, 'height':400};
           // Instantiate and draw our chart, passing in some options.
           var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
           chart.draw(data, options);
         } // end of drawChart

}// end of on draw pie chart





  //LINE GRAPH FOR STATE COUNT , represents how many states are in this graph
  function drawLineChartEstPop(objArray){
        // var states = getStateCount(objArray)   //this creates the states array
        // var statesSet = states.uniqueSet //this gets the unique states
            var arr = getEstPop(objArray)

                      console.log('in drawBarGraphforEstimatedPopulation')

                      google.charts.load('current', {'packages':['line']});
                      google.charts.setOnLoadCallback(drawChart);

                      function drawChart() {
                          var data = new google.visualization.DataTable();

                          data.addColumn('string', 'State');
                          data.addColumn('number', 'State Count');

                              arr.forEach( (i)=>{
                                  data.addRows([  [i.state , i.averagePopAvg ] ]); //this creates the graph
                               }) //drawChart



                      var options = {
                      chart: {
                        title: 'Estimated Populationt',
                        subtitle: 'this graph represents estimated popoulation per state'
                      },
                      width: 650,
                      height: 300

                      };


              var chart = new google.charts.Line(document.getElementById('curve_count'));
              chart.draw(data, google.charts.Line.convertOptions(options));
            }
    } //end drawLineChartEstPop





      function drawLineChartForAvgWages(objArray){
          var arr = getAverageWages(objArray)

                  google.charts.load('current', {'packages':['line']});
                  google.charts.setOnLoadCallback(drawChart);

                        function drawChart() {
                            var data = new google.visualization.DataTable();
                            data.addColumn('string', 'State');
                            data.addColumn('number', 'Average');

                            arr.forEach((i)=>{
                                 data.addRows([ [ i.state , i.averageStateWage] ]);
                            })

                        var options = {
                        chart: {
                          title: 'State Wage Average',
                          subtitle: 'this graph represents average wages earned per state'
                        },
                        width: 650,
                        height: 300
                        };

                        var chart = new google.charts.Line(document.getElementById('curve_average'));
                        chart.draw(data, google.charts.Line.convertOptions(options));
                        }
      } //end of drawLineChartForAvgWages











//FOR AVERAGES OF WAGES , shows average wages per state
function drawBarGraphForAvgWages(objArray){
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBarChart);

   function drawBarChart() {
      var arr = getAverageWages(objArray)

         var data = new google.visualization.DataTable();
         data.addColumn('string', 'State');
         data.addColumn('number', 'Average Wages');

         arr.forEach((i)=>{
              data.addRows([ [ i.state , i.averageStateWage] ]);
         })

      var options = {'title':'Average Wages per State', 'width':600, 'height':300};

         var chart = new google.visualization.ColumnChart(
           document.getElementById('chart_div'));
            chart.draw(data, options);
       } //drawBarChart
}//end of function drawBarGraphForAvgWages




//barChartEstPop








//barforStatess

function drawBarGraphforEstimatedPopulation(objArray , size = 9999999){
    console.log('in drawBarGraphforEstimatedPopulation')
    console.log(size);

    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBarChartEstPop);

   function drawBarChartEstPop() {
      var arr = getEstPop(objArray)

         var data = new google.visualization.DataTable();
         data.addColumn('string', 'State');
         data.addColumn('number', 'Estimated Population');
      //
         arr.forEach((i)=>{
              data.addRows([ [ i.state , i.averagePopAvg] ]);
         })
      //
      var options = {'title':'Estimated Population per State', 'width':600, 'height':300};
      //
         var chart = new google.visualization.ColumnChart(
           document.getElementById('barChartEstPop'));
            chart.draw(data, options);
       } //drawBarChartEstPop
}//end of function drawBarGraphforEstimatedPopulation







//BAR GRAPH FOR STATE COUNT
function drawBarGraphforStateCount(objArray){
  google.charts.load('current', {packages:'bar'});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
        var states = getStateCount(objArray)   //this creates the states array
              console.log(states)
        var statesSet = states.uniqueSet //this gets the unique states
              console.log(statesSet)

          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'State');
          data.addColumn('number', 'Population');

              statesSet.forEach( (ar)=>{
                  if(ar !== undefined){
                      data.addRows([  [ar , states.tally[ar] ] ]); //this creates the graph
                    }
               })

          var options = {'title':'State Count', 'width':600, 'height':300};
          var chart = new google.visualization.ColumnChart(document.getElementById('barChartStateCount'));
                chart.draw(data,options);

     } // end of drawChart
}// end of on draw bar graph









  function createGeoMapAvgPop(objArray){
            google.charts.load('current', {packages: ['geomap']});
            google.charts.setOnLoadCallback(drawMap);

              function drawMap() {
                var arr = getEstPop(objArray)
                // var stateCount = getStateCount(objArray).tally

                   var data = new google.visualization.DataTable();
                   data.addColumn('string', 'State');
                   data.addColumn('number', 'Estimated Population');

                   arr.forEach((i)=>{

                        data.addRows([ [ i.state , i.averagePopAvg]  ]);
                   })

                var options = {'width':900, 'height':500 , region: "US", resolution: "provinces" };

                   var chart = new google.visualization.GeoChart( document.getElementById('regions_averageWaegs'));
                      chart.draw(data, options);

              }

      } //end of createGeoMap




  function createGeoMapStateCount(objArray){

    google.charts.load('current', {packages: ['geomap']});
    google.charts.setOnLoadCallback(drawMap);

      function drawMap() {
        // var arr = getEstPop(objArray)
        var stateCount = getStateCount(objArray).tally

        var key = Object.keys(stateCount)
        var values = Object.values(stateCount)

           var data = new google.visualization.DataTable();
           data.addColumn('string', 'State');
           data.addColumn('number', 'State Count');


           key.forEach((i, index)=>{
             console.log(i , values[index])

                data.addRows([ [i , values[index]]  ])
           })

        var options = {'width':900, 'height':500 , region: "US", resolution: "provinces" };

           var chart = new google.visualization.GeoChart( document.getElementById('regions_stateCount'));
              chart.draw(data, options);

      }



  }    // end of createGeoMapStateCount


















function drawd3chart( jsonObj ){

  (function (d3) {
  'use strict';

  d3.select(".d3-tip").style("background-color", 'white');


   var tooltip = d3.select("body").append("div")
       .attr("class", "tooltip")
        .style("fill", "white")
       // .style("opacity", 0.5);




  const svg = d3.select('#everything')
        // .style("fill", "white")
          .style("background-color", "white")
          .style('margin-left','20px')
          .style('display', 'flex')
          .style('margin', 'auto')
          // margin-left: 20px;
          // .style("padding", "200px")

    // svg.append("rect")
    // .attr("width", "100%")
    // .attr("height", "100%")
    // .attr("fill", "pink");


  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const render = data => {
    const title = 'EstimatedPopulation vs. Average Wages';

    const xValue = d => d.EstimatedPopulation;
    const xAxisLabel = 'EstimatedPopulation';

    const yValue = d => d.AvgWages;
    const circleRadius = 10;
    const yAxisLabel = 'Average Wages';

    const margin = { top: 75, right: 100, bottom: 90, left: 150 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth])
      // .range([0, 2000])
      .nice();





          const yScale = d3.scaleLinear()
            .domain(d3.extent(data, yValue))
            .range([innerHeight, 0])
            .nice();

          const g = svg.append('g')
            .style('padding' , "50px")
             .attr("fill", "white")

            .attr('transform', `translate(${margin.left-5},${margin.top})`)


          const xAxis = d3.axisBottom(xScale)
            .tickSize(-innerHeight)
            .tickPadding(10);

          const yAxis = d3.axisLeft(yScale)
            .tickSize(-innerWidth)
            .tickPadding(10);

          const yAxisG = g.append('g').call(yAxis);
          yAxisG.selectAll('.domain').remove();


        yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -100)
        .attr('x', -innerHeight / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);

          const xAxisG = g.append('g').call(xAxis)
            .attr('transform', `translate(0,${innerHeight})`);

          xAxisG.select('.domain').remove();

          xAxisG.append('text')
              .attr('class', 'axis-label')
              .attr('y', 75)
                  // .attr('y', 750)
              .attr('x', innerWidth / 2)
              .attr('fill', 'black')
              .text(xAxisLabel);

          g.selectAll('circle').data(data)
            .enter().append('circle')
              .attr('cy', d => yScale(yValue(d)))
              .attr('cx', d => xScale(xValue(d)))
              .attr('r', circleRadius)
              .style("opacity", .5)
              .style("fill", function(d) { return color(cValue(d));})

      //      added here // on hover
              .on("mouseover", function(d) {
                tooltip.transition()
                     .duration(200)
                     .style("opacity", .9);
                tooltip.html(d["City"]+ ", " + d["State"] + "<br/> (" + xValue(d)
      	        + ", " + yValue(d) + ")")
                     .style("left", (d3.event.pageX + 5) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                tooltip.transition()
                     .duration(500)
                     .style("opacity", 0);
            });



            const legendTable = d3.select('#legend');
            var legend = svg.selectAll(".legend")
                  .data(color.domain())
                  .enter().append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i){
                    console.log(d)
                    console.log(i)
                    return "translate(5," + i * 20 + ")";
                    })

              // draw legend colored rectangles
                  legend.append("rect")
                   .attr("x", width - 18)
                  .attr("width", 50)
                  .attr("height", 18)
                  .style("fill", color)

        // draw legend text
        legend.append("text")
            .attr("x", width - 24)
            // .attr("x", 50)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return d;})

            ///added here

          g.append('text')
              .attr('class', 'title')
              .attr('y', -10)
              .attr('x', 100)
              .text(title);

        };


            var cValue = function(d) {
              return d.State;
                },
                color = d3.scale.category20();



                  jsonObj.forEach(d => {
                    d.EstimatedPopulation = +d.EstimatedPopulation;
                    d.AvgWages = +d.AvgWages;
                  })
                     render(jsonObj);



      }(d3));






} //end of drawd3chart













//CHARTS TO BE MANIPUATED
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////?
/////////////////////////////////////////////////////////?














//FOR AVERAGES OF WAGES , shows average wages per state


// function drawBarGraphForAvgWages(objArray){
//     google.charts.load('current', {packages: ['corechart', 'bar']});
//     google.charts.setOnLoadCallback(drawBarChart);
//
//    function drawBarChart() {
//       var arr = getAverageWages(objArray)
//
//          var data = new google.visualization.DataTable();
//          data.addColumn('string', 'State');
//          data.addColumn('number', 'Average Wages');
//
//
//
//          arr.forEach((i)=>{
//
//             if(i.averageStateWage >22000){
//                 data.addRows([ [ i.state , i.averageStateWage] ]);
//             }
//
//          })
//
//       var options = {'title':'Average Wages per State', 'width':600, 'height':300};
//
//          var chart = new google.visualization.ColumnChart(
//            document.getElementById('chart_div'));
//             chart.draw(data, options);
//        } //drawBarChart
// }//end of function drawBarGraphForAvgWages
