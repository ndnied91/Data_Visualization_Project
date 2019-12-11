



<?php
include "dbconfig.php";


$con=mysqli_connect($server, $login, $password, $dbname) or die("cant connect");

$cookie=$_POST['cookie'];




$validator=mysqli_query( $con, "SELECT * FROM DV_User WHERE login='$cookie' ")
 or die("Could not execute query: " .mysqli_error($conn));

$row = mysqli_fetch_assoc($validator); //returns an array of strings with fetched credentials

    if(!$row) {
  //VALIDATION FAILED
            // echo "error";
            $data = json_encode("error");
             echo $data;
}

else {
//VALIDATION PASSED
         $data = json_encode($row);

            $cookieSetters = json_decode($data);

                // setcookie($cookieSetters->login , $cookieSetters->id , time() + (3600), "/"); //sets cookie after validation

         echo $data;




}


?>
