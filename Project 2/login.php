
<?php
include "dbconfig.php";


$con=mysqli_connect($server, $login, $password, $dbname) or die("cant connect");

$user=$_POST['userName'];
$pass=$_POST['password'];




$validator=mysqli_query( $con, "SELECT * FROM DV_User WHERE login='$user' AND password='$pass' ")
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

                setcookie($cookieSetters->login , $cookieSetters->id , time() + (3600), "/"); //sets cookie after validation

         echo $data;




}


?>
