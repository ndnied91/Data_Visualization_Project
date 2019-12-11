
// var valueOfSlider; //INITIALIZED AS A GLOBAL VARIABLE


function calculateWageAvg(arr){
  var avgtoReturn;
  // var key = 0
  // if(arr.RecordNumber !== null){
  // console.log(arr.RecordNumber)

            var total = 0;
                for(var key in arr) {
                    // if(arr[key].EstimatedPopulation !== undefined){
                       if(arr[key].AvgWages){
                        total = total + arr[key].AvgWages
                        // console.log(parseInt(key) + 1)
                      avgtoReturn =  total/ (parseInt(key) + 1)
                        // console.log(avgtoReturn)
                    }
                }

                return avgtoReturn;

  } //end of function




function slider(){
           var avg = calculateWageAvg(objArray);
             // console.log(`AVG ${avg}`);

            var sorted = sortedAvgWages(objArray);
             sorted.sort((a,b) => a - b);

              // console.log(sorted)



            // console.log(`First element ${sorted[0]}`) //beginning of slider
            // console.log(`Last element ${sorted[sorted.length - 1]}`) //end of slider

            document.getElementById("myRange").min = sorted[0];
            document.getElementById("myRange").max = sorted[sorted.length - 1];






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //  //everything for population //
          var popSort = getAllPopulations(objArray).sort((a,b) => a - b);
          // console.log(popSort); //GETS SORTED ARRAY

         // console.log(`POP First element ${popSort[0]}`) //beginning of slider
         // console.log(`POP Last element ${popSort[popSort.length - 1]}`) //end of slider

          // var estimatedPopulationAVG = getPopulationAverage(objArray);
          var estimatedPopulationAVG = parseInt(getPopulationAverage(objArray).toFixed(2)); //GETS AVERAGE


          document.getElementById("popRange").min = popSort[0];
          document.getElementById("popRange").max = popSort[popSort.length - 1];




          //
          // //if user is not signed in , just use default , if user signed in then use the user one
          //
                    console.log(setterForAvgPop)

                        //    var popSlider = document.getElementById("popRange");
                        //   var popoOutput = document.getElementById("avgPopSlide");
                        //
                        // var slider = document.getElementById("myRange");
                        // var avgWageSlideValue = document.getElementById("avgWageSlide");
          //
          //
                                // if( setterForAvgPop !== undefined){
                                //
                                //        popSlider.value = parseInt(setterForAvgPop.pop);
                                //
                                //
                                //
                                //
                                //
                                // } else{
                                //   console.log('we dont have the user signed in, we will use default values')
                                //   popoOutput.innerHTML = popSlider.value;
                                //   popSlider = document.getElementById("popRange");
                                //
                                //        // popSlider.value = estimatedPopulationAVG;
                                //
                                //   slider = document.getElementById("myRange");
                                //   avgWageSlideValue.innerHTML = parseInt(slider.value);
                                // }

          //
          //
          // $('#avgPopulation').text(estimatedPopulationAVG);  //THIS GETS THE AVERAGES , LEAVE THIS ALONE
          // $('#avgPopSlide').text(popSlider);                 //THIS GETS THE AVERAGES , LEAVE THIS ALONE
          //
          // // popSlider = document.getElementById("popRange");
          // // popSlider.value = estimatedPopulationAVG;
          //
          // // var popoOutput = document.getElementById("avgPopSlide");
          // popSlider.oninput = function slide() {
          //             popoOutput.innerHTML = this.value;
          //                 // console.log(this.value)
          // } //slider function
          //
          //
          //
          //
          //                   popSlider.oninput = function slide() {
          //                               popoOutput.innerHTML = this.value;
          //                                   // console.log(this.value)
          //                   } //slider function

//
//             //add event handler to slider
//             $('#popRange').on('change', ()=>{
//
//                 var val =  $('#popRange').val()
//                     valueOfSlider = sliderVal(val);
//             })
//
//                      // let sliderVal = val => parseInt(val);
//                 function sliderVal(val){
//                       if(val === NaN || val === undefined){
//                                     return 0;
//                           }
//                               else {
//                                   return parseInt(val)
//                           }
//
//
//                 }
//
//
//
//
//           // var slider = document.getElementById("myRange");
//           // var avgWageSlideValue = document.getElementById("avgWageSlide");
//
//           avgWageSlideValue.innerHTML = parseInt(slider.value);
//               slider.oninput = function() {
//                         avgWageSlideValue.innerHTML = parseInt(this.value).toFixed(0);
//                            //console.log(avgWageSlideValue.innerHTML);  //THIS GETS THE AVGWAGES VALUE
//               } //slider function
//
//
//
//
//           $('#myRange').on('change', ()=>{
//             // console.log('event triggered')
//                     // console.log( $('#myRange').val() ) //ON CHANGE ONLY FIRED WHEN MOUSE UP HAPPENS
//                                                 //THIS PREVENTS LAGGINESS
//               let val = $('#myRange').val()
//                       valueOfSliderAvgWages = sliderVal(val);
//                       // console.log(valueOfSliderAvgWages)
//           })
//
//
// }




          // console.log('BEFORE SAVING TO DATABASE')
//
// console.log('if user is signed in, use user settings , if not use default')
// console.log('this will be decided here')
//           //if user is not signed in , just use default , if user signed in then use the user one

        console.log(setterForAvgPop)

            var popSlider = document.getElementById("popRange");          //RANGE SLIDER
            var slider = document.getElementById("myRange");                 //RANGE SLIDER

            var output = document.getElementById("avgWageSlide");
            var populationAverageOutput = document.getElementById("avgPopSlide");



                  $('#avgPopulation').text(estimatedPopulationAVG);
                  $('#avgPopSlide').text(popSlider);






          var popSlider = document.getElementById("popRange");
          popSlider.value = estimatedPopulationAVG;

          var populationAverageOutput = document.getElementById("avgPopSlide");
          populationAverageOutput.innerHTML = popSlider.value;

          popSlider.oninput = function slide() {
                      populationAverageOutput.innerHTML = this.value;
                          // console.log(this.value)
          } //slider function

            //add event handler to slider
            $('#popRange').on('change', ()=>{
              // console.log('event triggered')
              // console.log( $('#popRange').val() ) //ON CHANGE ONLY FIRED WHEN MOUSE UP HAPPENS
                                                  //THIS PREVENTS LAGGINESS
                var val =  $('#popRange').val()
                    valueOfSlider = sliderVal(val);
            })

                //call this funcitno when event is triggered
                     // let sliderVal = val => parseInt(val);
                function sliderVal(val){
                      if(val === NaN || val === undefined){
                                    return 0;
                          }
                              else {
                                  return parseInt(val)
                          }


                }



            //AVERAGE POPULATION COLOR FORMATTER


                     //sliderVal recerived val , then parses it as an int

                      //THIS NOW NEEDS TO GET PASSED INTO THE GOOGLE FORMAT
                       //return value and pass into google format



            // console.log('making sure these values tranfer over in where we can declare')
            // console.log(setterForAvgPop)



          // var slider = document.getElementById("myRange");
          // var output = document.getElementById("avgWageSlide");

          output.innerHTML = parseInt(slider.value);

          slider.oninput = function() {
                    output.innerHTML = parseInt(this.value).toFixed(0);
                       //console.log(output.innerHTML);  //THIS GETS THE AVGWAGES VALUE
          } //slider function

          $('#myRange').on('change', ()=>{
            // console.log('event triggered')
                    // console.log( $('#myRange').val() ) //ON CHANGE ONLY FIRED WHEN MOUSE UP HAPPENS
                                                //THIS PREVENTS LAGGINESS
              let val = $('#myRange').val()
                      valueOfSliderAvgWages = sliderVal(val);
                      // console.log(valueOfSliderAvgWages)
          })


}




























function getStateCount(arr){
  var temp=[];
  for(var key in arr) {
            if(arr[key].State !== null){  //fixed null issue
                temp.push(arr[key].State)
            }
  }
  console.log(temp)

        const uniqueSet = new Set(temp) // will create array of non duplicates

        const tally = temp.reduce(function(tally, key){
                tally[key] = tally[key] ? tally[key] + 1 : 1;
                return tally;
            }, {}); //this gets a new array

      return {uniqueSet, tally}; //this return the array to outside of function
  }





      //GET AVERAGE WAGES
            function getAverageWages(arr){

                  var stateTemp=[]
                  var stateTotal=0;
                  var finalObj=[]
                  var total = 0
                  var states = getStateCount(arr)   //this creates the states array
                  var statesSet = states.uniqueSet //this gets the unique states
                  var stateAvg =0;

                 statesSet.forEach( (state)=>{ //gets every state
                   // console.log(state)
                   // console.log('----------')

              if(state !== null){
                           arr.forEach( (i)=>{

                // console.log(i.AvgWages)

                                  if( isNaN(i.AvgWages)){
                                    console.log('found Nans');
                                  } else{
                                    // console.log(i.AvgWages)
                                            if(i.State === state){
                                                 total = total + i.AvgWages
                                                                       // console.log(`Adding ${i.AvgWages}`)
                                                                       // console.log(`Total :${total}`)
                                              } // if state statment



                                  } //else state on NaN

                           }) //fpr each Array
                      stateAvg = (total / (states.tally[state]))
                      finalObj.push({ "state": state  , "averageStateWage": parseFloat(stateAvg) })
                      total = 0;
                } //state null
                   })



                     // console.log(finalObj)
                  return finalObj


}











      function getEstPop(arr){
        // console.log(arr)
        var stateTemp=[]
        var stateAvg=0;
        var returnObj=[]
        var total=0;

                    var states = getStateCount(arr)   //this creates the states array
                    // console.log(states)
                    var statesSet = states.uniqueSet //this gets the unique states

                    statesSet.forEach( (state)=>{ //gets every state
                        // console.log(state)
                              arr.forEach( (i)=>{
                                // console.log(i)
                                                   if(i.State === state){
                                                       // console.log(states.tally[state])
                                                      total = total + i.EstimatedPopulation
                                                      // console.log(` Adding ${i.EstimatedPopulation}`)
                                                   }
                              })
                                   // console.log(`Total ${total} : for ${state} will be divided by  ${states.tally[state]}`)
                                    // estimatedPopAvg = total / (states.tally[state])
                                    estimatedPopAvg = total
                                   // console.log(`Average is ${estimatedPopAvg}`)
                                   returnObj.push({ "state": state  , "averagePopAvg": estimatedPopAvg })
                                   total = 0;
                      }) //end of stateSet
                                return returnObj;

      } //end of getestpop






      function getAvgWageArr(arr){
              var temp=[];
                    for(var key in arr) {
                              if(arr[key].State !== null){  //fixed null issue
                                  temp.push({"Key" : arr[key].RecordNumber, "Avg" : arr[key].AvgWages}) //THIS PROVIDES A REFERENCE TO KEYS
                                  // temp.push(arr[key].AvgWages);
                              }
                    }
                    return temp;
          // console.log(' in getAvg Arr')
      }





            function sortedAvgWages(arr){
                    var temp=[];
                          for(var key in arr) {
                                    if(arr[key].State !== null){  //fixed null issue
                                        // temp.push({"Key" : arr[key].RecordNumber, "Avg" : arr[key].AvgWages}) //THIS PROVIDES A REFERENCE TO KEYS
                                        temp.push(parseFloat(arr[key].AvgWages));
                                    }
                          }
                          return temp;
                // console.log(' in getAvg Arr')
            }









            function getAllPopulations(arr){

                    var temp=[];
                          for(var key in arr) {
                                    if(arr[key].State !== null){  //fixed null issue
                                        // temp.push({"Key" : arr[key].RecordNumber, "Avg" : arr[key].AvgWages}) //THIS PROVIDES A REFERENCE TO KEYS
                                        temp.push(parseFloat(arr[key].EstimatedPopulation));
                                    }
                                    // console.log(temp)
                          }
                          return temp;
            }






            function getPopulationAverage(arr){
              var avgtoReturn;
              var total = 0;

                            for(var key in arr) {
                                // if(arr[key].EstimatedPopulation !== undefined){
                                   if(arr[key].EstimatedPopulation){
                                    total = total + arr[key].EstimatedPopulation
                                    // console.log(parseInt(key) + 1)
                                  avgtoReturn =  total/ (parseInt(key) + 1)
                                    // console.log(avgtoReturn)
                                }
                            }
                            return avgtoReturn;

              } //end of function





//outlier
function filterOutliers(arr) {

  if(arr.length < 4)
    return arr;

    let values, q1, q3, iqr, maxValue, minValue;

    values = arr.slice().sort( (a, b) => a - b);//copy array fast and sort

        if((values.length / 4) % 1 === 0){//find quartiles
          q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
          q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
        } else {
          q1 = values[Math.floor(values.length / 4 + 1)];
          q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
        }

      iqr = q3 - q1;
      maxValue = q3 + iqr * 1.5;
      minValue = q1 - iqr * 1.5;

              // console.log(minValue)
              // console.log(maxValue)

      return obj = {
        minValue , maxValue,  //GETS MIN AND MAX VALUES AND CAN APPEND TO INDEX HTML
        "results" : values.filter((x) => (x >= minValue) && (x <= maxValue))}
}


function returnableOutlier(objArray){

          let sorted = sortedAvgWages(objArray);
          let outlier = filterOutliers(sorted)
          // console.log(outlier)
          let outlierArr = outlier.results
          // console.log(outlier.minValue)
          // console.log(outlier.maxValue)

          let difference = outlierArr .filter(x => !sorted.includes(x)).concat(sorted.filter(x => !outlierArr.includes(x)));
                         // console.log(difference) //THIS SHOWS THE average wages OUTLIER
                         return {"min" :outlier.minValue ,
                                "max" : outlier.maxValue,
                                    difference}

                                    // return  difference
}
//outlier

















//GOOGLE TABLE TESTING

function drawGoogleTable(objectArray){

  var outlier = returnableOutlier(objArray)
  var actual;
  // console.log(outlier.difference.length)

    if(outlier.difference.length === 1){
          actual = outlier.difference[0]
    } else
          actual = null;


  let offset = actual+0.000001

  // console.log(objectArray)

  google.charts.load('current', {'packages':['table']});
        google.charts.setOnLoadCallback(drawTable);

            function drawTable() {
              var data = new google.visualization.DataTable();

                      data.addColumn('number', 'RecordNumber');
                      data.addColumn('number', 'Zipcode');
                      data.addColumn('string', 'City');
                      data.addColumn('string', 'State');
                      data.addColumn('number', 'EstimatedPopulation');
                      data.addColumn('number', 'AvgWages');
                      data.addColumn('number', 'Latitude');
                      data.addColumn('number', 'Longitude');



                      objectArray.forEach( (i)=>{

                                        data.addRows([
                                          [i.RecordNumber ,
                                           i.Zipcode ,
                                           i.City ,
                                           i.State ,
                                           i.EstimatedPopulation,
                                           i.AvgWages,
                                           i.Latitude,
                                           i.Longitude]
                                           ]);

                      })

              var table = new google.visualization.Table(document.getElementById('table_div'));



      // var estimatedPopulationAVG = parseInt(getPopulationAverage(objArray).toFixed(2)); //GETS AVERAGE
        var avg = calculateWageAvg(objArray); // value slider
                        changeAvgWageColor(avg)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                var popSlider = document.getElementById("popRange");          //RANGE SLIDER
                var avgwageSlider = document.getElementById("myRange");                 //RANGE SLIDER
                var avgwageAverageOutput = document.getElementById("avgWageSlide");
                var populationAverageOutput = document.getElementById("avgPopSlide");



                if( setterForAvgPop !== undefined){
                  console.log('setterForAvgPop IS SET')
                  console.log('we have a user and we have the values ')
                  console.log(parseInt(setterForAvgPop) )



                }
                else{

                  console.log('setterForAVGPop is NOT set')

                      var estimatedPopulationAVG = parseInt(getPopulationAverage(objArray).toFixed(2)); //GETS AVERAGE
                      console.log(estimatedPopulationAVG)
                                popSlider.value = estimatedPopulationAVG;



                }





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









      $('#myRange').on('change', ()=>{
        console.log('from on change function , avg wages ')
        // drawGoogleTable(objectArray)
        // console.log(valueOfSlider)
              changeAvgWageColor(valueOfSliderAvgWages)
              $('.google-visualization-table-page-number')[0].click()
            })


          function changeAvgWageColor(color){

            var avgWageColorFormat = new google.visualization.ColorFormat();
                avgWageColorFormat.addRange(color, null, 'red', 'none');
                avgWageColorFormat.addRange( actual, offset, 'black', 'yellow'); //FOR OUTLIER
                avgWageColorFormat.format(data, 5); // Apply formatter to second column
              }










//EVERYTHING PAST HERE IS ESTIMATED POPULATION
              var estimatedPopulationAVG = parseInt(getPopulationAverage(objArray).toFixed(2)); //GETS AVERAGE
                        changeEstPopColor(estimatedPopulationAVG)


    $('#popRange').on('change', ()=>{
      // console.log('from on change function , redraw chart ')
      // drawGoogleTable(objectArray)
      // console.log(valueOfSlider)
            changeEstPopColor(valueOfSlider)

            $('.google-visualization-table-page-number')[0].click()
          })


        function changeEstPopColor(color){
                  var estPopColorFormat = new google.visualization.ColorFormat();
                  estPopColorFormat.addRange(color, null, 'green', 'none');
                  estPopColorFormat.format(data, 4); // Apply formatter to second column
              //AVERAGE POPULATION COLOR FORMATTER
            }


              //TRY TO CHANGE THE SLIDER TO VALUE THAT GETS INPUT INTO THE ADD RANGE , MIGHT WORK
              table.draw(data, {allowHtml: true,
                                showRowNumber: true,
                                width: '100%', height: '100%' ,
                                pageSize: '25'}  );

        }
}
