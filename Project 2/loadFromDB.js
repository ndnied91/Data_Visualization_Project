var databaseObj = [];
  var dbTarget;
// console.log( Cookies.get('username'))



$(".validLoginCheck").on("click", function (event) {
         dbTarget =  $(this)[0].textContent;
                checker(dbTarget);


})






function checker(call){
  // console.log(call);
var userCheck = Cookies.get('username');

  if(call === "Load DB1"){
    console.log('will load data from table 1');

    if(userCheck !== undefined){
        makedbCall("1");
    }
    else{
      console.log('user not logged in')
      $('#needsLginBTN').click()
    }


  }

  else if(call === "Load DB2"){

      console.log('will load data from table 2');
      if(userCheck !== undefined){
          makedbCall("2");
      }
      else{
        console.log('user not logged in')
          $('#needsLginBTN').click()
      }


  }
    else if(call === "Load DB3"){
      console.log('will load data from table 3');

      if(userCheck !== undefined){
          makedbCall("3");
      }
      else{
        console.log('user not logged in')
          $('#needsLginBTN').click()
      }


    }
}





function makedbCall(db){
      $.ajax({
        url: "loadDataFromDb.php",
        type: "POST",
        data: {db: db},
        dataType: "html",
        beforeSend: function() {
                      console.log('checking db...');
                      // clear current array
                      console.log(databaseObj)
                      databaseObj.length = 0;
                      databaseObj=[]
                      console.log(databaseObj)
                      objArray=[]

                  },
                    success: function(data) {
                                  // var obj = JSON.parse(data);
                                  // parseFile(data);
                                  // console.log('sucess parsing file from database');
                                  var cookie = cookie = Cookies.get('username');
                                  console.log(cookie)
                                  console.log('within load')

                                  if(cookie !== undefined){
                                    console.log('cookie is not undefined')
                                    console.log(cookie)
                                    $('.applyChanges').attr("disabled", false);
                                    $('.saveToDb').attr("disabled", false)
                                    $('.saveToDb').removeClass('notAllowed')
                                  }

                                  else{
                                    console.log('cookie is undefined')
                                    console.log(cookie)
                                    $('.applyChanges').attr("disabled", true); //resets the checkbox
                                    // $('.saveToDb').attr("disabled", true);
                                    $('.saveToDb').attr("disabled", true)
                                    $('.saveToDb').addClass('notAllowed')
                                  }


                                  // var data = Papa.parse(obj);
                                  // console.log(data);
                                   // var parsedObj = { "data" : JSON.parse(data)} //gets the data from database, parses it and send its off
                                       // displayHTMLTable(parsedObj); //from oringal function
                                         var parsedObj = JSON.parse( data) //gets the data from database, parses it and send its off
                                         // console.log(parsedObj);

                                        parsedObj.forEach(function(i ){
                                          let obj = { "RecordNumber" : parseFloat(i.RecordNumber),
                                                      "Zipcode" : parseFloat(i.Zipcode),
                                                      "City" : i.City,
                                                      "State" : i.State,
                                                      "EstimatedPopulation" : parseFloat(i.EstimatedPopulation),
                                                      "AvgWages": parseFloat(i.AvgWages),
                                                      "Latitude" : parseFloat(i.Latitude) ,
                                                      "Longitude" : parseFloat(i.Longitude)
                                        }

                                            databaseObj.push(obj);

                                        })
                                        // console.log(databaseObj);

                                           displayHTMLTable( {"data":databaseObj} ); //from oringal function
                                  }
                    ,
                  error: function(data) {
                    console.log(data)

                  }
      });




} // end makedbCall
