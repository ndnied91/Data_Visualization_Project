
//updated 12/212 5:46pm
var valueOfSlider;
var uidPassed;
var setterForAvgPop;


    var data=[]
    var fullarr=[]
    var wageCount=0;
    var avgWage=0;
    var parsedWages=0;
    var objArray = []

    //this only works on Chrome right now
    //will not work on safari
    var pageSize = window.performance.memory.jsHeapSizeLimit;
    // console.log(pageSize)
    var fileSize;
    var totalSize;
    var rowCount = 0;




    $('#exit').on('click' , ()=>{
      window.close()
    })

    $('#client').on('click' ,()=>{
        var OS="Unknown OS";
          if (navigator.appVersion.indexOf("Win")!=-1) OS="Windows";
          if (navigator.appVersion.indexOf("Mac")!=-1) OS="MacOS";
          if (navigator.appVersion.indexOf("X11")!=-1) OS="UNIX";
          if (navigator.appVersion.indexOf("Linux")!=-1) OS="Linux";

          $('#os').text(OS)
          $('#version').text(navigator.appVersion);
          $('#type').text(navigator.platform);
          $('#cookies').text(navigator.cookieEnabled);
          $('#js').text(navigator.javaEnabled())
    })






function checkUserLoginAndDataSet(){

}










//SAVE TO DATABASE CALL
$('.saveToDb').on('click' , (e)=>{
  e.preventDefault()

      $('#saveToDbModalBTN').click()




var averageWageCurrent = parseInt($('#avgWageSlide').text() )
// console.log(averageWageCurrent)

var estimatedPopulationCurrent = parseInt( $('#avgPopSlide').text() )
// console.log(estimatedPopulationCurrent)


cookie = Cookies.get('username');
console.log(cookie)
let cookieUID = Cookies.get('uid');
console.log(cookieUID)



  $.ajax({
    url: "insertIntoDb.php",
    type: "POST",
    data: {
            cookieUID: cookieUID, //User ID
            cookie: cookie, //LOGIN NAME
            averageWageCurrent : averageWageCurrent, //AVG WAGES
            estimatedPopulationCurrent:estimatedPopulationCurrent //EST POP
            //needs to get the date
            },
    dataType: "html",
    beforeSend: function() {
                  // console.log('already logged in');
                  console.log('SAVING TO DATABASE')

              },
                success: function(data) {
                              console.log(data)

                              //GET BACK ESIMATED POPULATION VALUE
                              //GET BACK ESTIMATED AVERAGE WAGE VALUE





                }
                ,
              error: function(data) {
                console.log(data)

              }

  });  //END OF AJAX



  console.log('save to database button clicked')
}) //END OF MAIN FUNCTION

//SAVE TO DATABASE CALL







//clicks on 'upload file'
    $('#csv').on('click' , ()=>{
        $('#files').click()
    })




$('#files').on("change",function(e){
      // parseFile(e);
  // function parseFile(){};
		e.preventDefault();

      console.log( 	$('#files'));
		$('#files').parse({
			config: {
				delimiter: ",",
        header: true,
        dynamicTyping: true,
				 complete: displayHTMLTable,
},

			   before: function(file, inputElem){
				        console.log("Parsing file...", file);
                  fileSize = file.size;
                    totalSize= (fileSize / pageSize) * 100;
                      console.log(`Total size is : ${totalSize}%`)

			        },
			             error: function(err, file) {
				                 console.log("ERROR:", err, file);
			         },
			            complete: function() {
				                console.log("Done with all files");

                        console.log(cookie)
                        // console.log('line 166')

                        $('.applyChanges').attr("disabled", false);

                        $('.saveToDb').attr("disabled", false)
                        $('.saveToDb').removeClass('notAllowed')


			             }
		}); //end of .parse file


}); //FILES ON CHANGE




function displayHTMLTable(results){
  //ways to resolve this bug
  //either parse everything after data
  //or parse data into intergers
               data = results

      data.data.forEach(function(element, index) {
        // console.log(element)
        // console.log(index)

            if(element.RecordNumber !== null){
                // objArray.push(element)
                // console.log(element)

                            let obj = { RecordNumber: element.RecordNumber,
                                    Zipcode: element.Zipcode,
                                    City: element.City,
                                    State: element.State,
                                    EstimatedPopulation : element.EstimatedPopulation,
                                    AvgWages : element.AvgWages,
                                    Latitude: element.Latitude,
                                    Longitude : element.Longitude
                                  }

                       objArray.push(obj);

            }

  });  //for Each loop

                // console.log(objArray)
        		            data = objArray;
                        rowCount = data.length;
                          $('#rowCount').text(rowCount)
                          //positoned here because this is after parsing

       checkUser()
      drawGoogleTable(objArray) //GOOGLE TABLE


    //MESSAGE
  $('.message1').text(' Number of Records : ')
  $('#successModalBTN').click() //DISPLAYS SUCCESS MODAL



          //////AVERAGE WAGE CALCULATOR

  $('#avgWage').text( Math.floor(calculateWageAvg(objArray) ))
  $('#myRange').val(calculateWageAvg(objArray));
    slider();

        getAvgWageArr(objArray);



// outlier
 var outlier = returnableOutlier(objArray);
 // console.log(outlier)
 // console.log(outlier.difference) //NEED TO FIND THIS


        if(outlier.difference.length === 1 ){
          /// this only runs if there is an outlier
        //this is where we can show the values of outlier
            $('#outlier').text(`OUTLIER  Min: ${(outlier.min).toFixed(2) }  Max: ${(outlier.max).toFixed(2)} `)
        //THIS SHOWS THE OUTLIER MARGINS
        }



//FIND A TD THAT CONTAINS THIS NUMBER

//TEST AREA


var cookie = Cookies.get('username'); //COOKIE CHECK
       if(cookie !== undefined && data.length !==0){
            $('.applyChanges').attr("disabled", false);
       }


} //END OF DISPAY TABLE FUNCTION


    function clearGraphField(){
      $('.column').text(" ");
      $('#bod').text(" ");
     // $('#everything').text(" ")
     $('#everything').hide()
    }





    $(".view").on("click", "p", function (event) {
            var graphTarget =  $(this)[0].textContent;
            console.log(graphTarget)
                      //this checks what graph will need to be picked
                  if(data.length === 0){
                    $('#errorBtn').click()
                  }

                          else if(graphTarget === 'Pie'){ //this makes sure that pie is clicked
                                clearGraphField()
                                drawPieChartForStateCount(objArray)
                          }
                          else if(graphTarget === 'Line'){
                            clearGraphField()
                            drawLineChartEstPop(objArray)
                            drawLineChartForAvgWages(objArray)
                          }
                          else if(graphTarget ==='Bar'){
                            clearGraphField(objArray)
                            drawBarGraphForAvgWages(objArray)
                            drawBarGraphforEstimatedPopulation(objArray)
                            drawBarGraphforStateCount(objArray)
                          }
                          else if( graphTarget === 'Map'){
                                  clearGraphField()
                                  createGeoMapAvgPop(objArray)
                                  createGeoMapStateCount(objArray)
                          }
                          else if(graphTarget === 'D3'){
                            clearGraphField()
                            drawd3chart(objArray)
                          }

    }); // $('.views')








    $('#fieldSet').click(function() {
             if($('#radioOptions').is(':checked')) {

                         if(data.length === 0){
                           $('#errorBtn').click()
                         }

                          else{
                            clearGraphField(objArray)
                            drawLineChartForAvgWages(objArray);
                            drawBarGraphForAvgWages(objArray);
                          }

              }
    });



    $('#fieldSet').click(function() {
       if($('#radioOptions1').is(':checked')) {

                         if(data.length === 0){
                           $('#errorBtn').click()
                         }

                          else{
                            clearGraphField(objArray)
                            drawBarGraphforEstimatedPopulation(objArray);
                            drawLineChartEstPop(objArray);
                          }

        }
    });


    $('#fieldSet').click(function() {
       if($('#radioOptions2').is(':checked')) {

                         if(data.length === 0){
                           $('#errorBtn').click()
                         }

                        else{
                          clearGraphField(objArray)
                          drawBarGraphforStateCount(objArray)
                          drawPieChartForStateCount(objArray)
                        }

        }
    });
