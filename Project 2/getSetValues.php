
<?php


include "dbconfig1.php";



$con=mysqli_connect($server, $login, $password, $dbname) or die("cant connect");

$cookie=$_POST['nameToBePassed'];




$validator=mysqli_query( $con, "SELECT avg, pop FROM 2019F_niedzwid.p2_data WHERE login='$cookie' ")
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
         echo $data;
}


?>
