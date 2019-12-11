//http://eve.kean.edu/~niedzwid/CPS4745/testing/
  $('.applyChanges').attr("disabled", true);

  $('.saveToDb').attr("disabled", true)
  $('.saveToDb').addClass('notAllowed')



// not-allowed


var cookie = Cookies.get('username');
console.log(cookie)


function checkUser(){
  console.log('in check user')


console.log('set cookie')











  if( cookie !==undefined &&  objArray.length > 0 ){
    console.log('verified that user is logged in and data is not empty')

    $('.saveToDb').attr("disabled", false)
    $('.saveToDb').removeClass('notAllowed')



    $.ajax({
      url: "getSetValues.php",
      type: "POST",
      data: {cookie: cookie},
      dataType: "html",
      beforeSend: function() {
                    console.log('getting values...');
                },
                  success: function(data) {
                                // console.log(data)
                                var obj = JSON.parse(data);
                                console.log(obj)
                  },
                error: function(data) {
                  console.log(data)
                }
    }); //end of ajax


  }
}


//CHECKBOX

    if (cookie === undefined){
      console.log('COOKIE IS NOT SET');
      //

      $('.applyChanges').attr("disabled", true); //resets the checkbox
      // $('.saveToDb').attr("disabled", true);
      $('.saveToDb').attr("disabled", true)
      $('.saveToDb').addClass('notAllowed')

    } else{
        //HAVE TO CREATE AN AJAX CALL TO DATABASE TO QUERY COOKIE
          // console.log('cookie set, will make ajax call');
           $('.login').text('Logout');

          $.ajax({
            url: "loggedin.php",
            type: "POST",
            data: {cookie: cookie},
            dataType: "html",
            beforeSend: function() {
                          console.log('already logged in');

                      },
                        success: function(data) {
                                      console.log(data)
                                      var obj = JSON.parse(data);
                                      console.log(obj)
                                        $('#welcomeMessage').text(`${obj.login}`)
                                                updateUserSettings(obj);
                                                  uidPassed = obj.uid;
                                                    let cookie = obj.login;

                                                // console.log(data)
                                                    // console.log(' success , this happens when user logged in, still need to get values ')
                                                    var obj = JSON.parse(data);
                                                    console.log(obj.login)
                                                    let nameToBePassed = obj.login

                                                    $.ajax({
                                                      url: "getSetValues.php",
                                                      type: "POST",
                                                      data: {nameToBePassed: nameToBePassed},
                                                      dataType: "html",
                                                      beforeSend: function() {
                                                                    console.log('getting values...');
                                                                },
                                                                  success: function(data) {
                                                                                // console.log(data)
                                                                                var obj = JSON.parse(data);
                                                                                setterForAvgPop = JSON.parse(data);
                                                                                console.log(setterForAvgPop) //GETS VALUES NEEDED

                                                                  },
                                                                error: function(data) {
                                                                  console.log(data)
                                                                }
                                                      })


















                        }
                        ,
                      error: function(data) {
                        console.log(data)

                      }

          });
        // end of already logged in function



} //end of else statmten


var user;





$('body').on('click', (e)=>{
  // e.stopPropagation()
  // $('.graphArea').css('background-color', 'red');
  // $('.graphArea').css('z-index', '4');
})




$('#loginModal').on('click', (e)=>{

  $('#loginFullModalBTN').click()

    // z-index: -4; THIS WORKS BUT IT NEEDS TO BE TAKEN OUT AFTER

  // $('.scrollable-content').css('z-index', '-4');

  var log = $('#loginModal')[0].innerText;    //NOT WORKING
  var userName = $('#welcomeMessage').text()
  // console.log(userName);
   console.log(log);

  if(log === "Logout"){
    e.preventDefault()
    $('.applyChanges').attr("disabled", true); //resets the checkbox
    // $('.saveToDb').attr("disabled", true);
    $('.saveToDb').attr("disabled", true)
    $('.saveToDb').addClass('notAllowed')



      // alert("CLICKED ON LOGOUT") HERE CAN BE ADDED THE ADDTIONAL QUESTION IF USER WANTS TO LOG OUT

       $('.login').text('Login');
                $('#logoutModal').click()
               Cookies.remove('username')
               Cookies.remove('uid')
              $('#graphArea').text('')
              $('#welcomeMessage').text('');
              $('#userName').text('');
              $('#userLogin').text('');
              $('#userId').text('');
              $('#userGender').text('');

  }
})





  $('#submit').on('click', (event)=>{
      event.preventDefault();

     var userName = $('#username').val();
     var password = $("#password").val();

     console.log('hereee')
     $('.message').click()



    $.ajax({
      url: "login.php",
      type: "POST",
      data: {userName: userName , password: password},
      dataType: "html",
      beforeSend: function() {

                  },
                  success: function(data) {
                                console.log(data)
                                console.log(' success')
                                var obj = JSON.parse(data);
                                console.log(obj.login)

                                let nameToBePassed = obj.login

                            // console.log('here')




                                $.ajax({
                                  url: "getSetValues.php",
                                  type: "POST",
                                  data: {nameToBePassed: nameToBePassed},
                                  dataType: "html",
                                  beforeSend: function() {
                                                console.log('getting values...');
                                            },
                                              success: function(data) {
                                                            // console.log(data)
                                                            var obj = JSON.parse(data);
                                                            setterForAvgPop = JSON.parse(data);
                                                            console.log(setterForAvgPop) //GETS VALUES NEEDED

                                              },
                                            error: function(data) {
                                              console.log(data)
                                            }




                                }); //END OF CALL










                                if(data.length >50 ){
                                  console.log('passed!')
                                  $('#welcomeModal').click();
                                  var name = obj.login

                                  $('#welcomeName').text(  name.toUpperCase() );

                                  $('#loginFullModalBTN').hide()
                                  $("#loginFullModalBTN .close").click()

                                  // $('#id01').click();
                                  $('#username').val('');
                                  $("#password").val('');
                                  user = obj.login;
                                  console.log(user)
                                  $('#welcomeMessage').text(`${obj.login}`)
                                  // $('#welcomeMessage').val(user)
                                  $('.close').click()



                                            $('.login').text('Logout')
                                                  Cookies.set(  'username' , obj.login , { expires: 7 })
                                                  Cookies.set(  'uid' , obj.uid , { expires: 7 })
                                                          console.log( Cookies.get() );

                                                          // $('#loginFullModalBTN').hide()
                                                          // $("#loginFullModalBTN .close").click()
                                                          //

                                                                  //set user info
                                                                      updateUserSettings(obj); //will update data on BRAND NEW LOGIN
                                                                      checkUser()

                                                                      //SETS COOKIE
                                                                      // console.log(objArray)
                                                                      if(objArray.length!==0){
                                                                            $('.applyChanges').attr("disabled", false); //resets the checkbox
                                                                            // $('.saveToDb').attr("disabled", false);
                                                                            $('.saveToDb').attr("disabled", false)
                                                                            // console.log('here, right after both are verified')
                                                                            $('.saveToDb').removeClass('notAllowed')







                                                                      }


                                }

                                else{
                                  console.log('failed LOGGIN IN!')
                                  $('#message').text('failed')
                                  $('#wrongDataModal').click()

                                    $('#id01').click();
                                  $('#username').val('');
                                  $("#password").val('');

                                }

                  },
                error: function(data) {
                  console.log(data)

                }

    });


      });










      function updateUserSettings(obj){
        // console.log('in updateUserSettings');
        console.log(obj);


                  $('#userName').text(obj.name);
                  $('#userLogin').text(obj.login);
                  $('#userId').text(obj.uid);
                  $('#userGender').text(obj.gender);


      }
