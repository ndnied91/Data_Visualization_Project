
<?php
include "dbconfig.php";

// $myArray = [''];
$objArr = array();

$con=mysqli_connect($server, $login, $password, $dbname) or die("cant connect");

$db=$_POST['db'];



// $query=mysqli_query( $con, "SELECT * FROM vDV_Data$db ")
$query=mysqli_query( $con, "SELECT * FROM vDV_Data$db ")
 or die("Could not execute query: " .mysqli_error($conn));



 while ($result = mysqli_fetch_assoc($query)){

             if($result) {
               // print_r($result);
                          $RecordNumber = $result['RecordNumber'];
                          $Zipcode = $result['Zipcode'];
                          $City = $result['City'];
                          $State = $result['State'];
                          $EstimatedPopulation = $result['EstimatedPopulation'];
                          $AvgWages = $result['AvgWages'];
                          $Latitude = $result['Latitude'];
                          $Longitude = $result['Latitude'];
                          // echo $RecordNumber;

                            $object = new stdClass();
                            $object->RecordNumber = $RecordNumber ;
                            $object->Zipcode = $Zipcode;
                            $object->City = $City;
                            $object->State = $State;
                            $object->EstimatedPopulation = $EstimatedPopulation;
                            $object->AvgWages = $AvgWages;
                            $object->Latitude = $Latitude;
                            $object->Longitude = $Longitude;
                            //this works

                            // print_r($object);
                            //THIS CREATES THE OBJECT SUCCESSFULLY

                           array_push($objArr ,$object );

                    //OBJECT NEEDS TO BE CREATED BEFORE GETTING PASSED OFF
                    // THEN EACH OBJECT NEEDS TO BE PASSED OFF
             }

             else {
               //VALIDATION FAILED
                         $data = json_encode("error");
                          echo $data;
             }

 }


 // $data = json_encode($objArr);


 $data = json_encode($objArr);
    $cookieSetters = json_decode($objArr);
 echo $data;


 // printf($objArr);

 // $result = mysqli_fetch_assoc($query); //returns an array of strings with fetched credentials



 // if($result) {
 //         // print_r($result => $RecordNumber); //need to find a way to pull the data out of this
 //
 //         print_r($results);
 //
 //         //                   var_dump($object);
 //        //OBJECT NEEDS TO BE CREATED BEFORE GETTING PASSED OFF
 //        // THEN EACH OBJECT NEEDS TO BE PASSED OFF
 //        //
 //
 //        // $object = new stdClass();
 //        // $object->RecordNumber = 'Here we go';
 //        // $object->Zipcode = 'Here we go';
 //        // var_dump($object);
 // }

?>
