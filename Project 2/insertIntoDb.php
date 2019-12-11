
<?php


include "dbconfig1.php";


$con=mysqli_connect($server, $login, $password, $dbname) or die("cant connect");


$uidPassed=$_POST['cookieUID'];
$loginName=$_POST['cookie'];
$averageWageCurrent=$_POST['averageWageCurrent'];
$estimatedPopulationCurrent=$_POST['estimatedPopulationCurrent'];

//GETS ALL NECESSARY INFO
echo $loginName;
echo $uidPassed;
echo $averageWageCurrent;
echo $estimatedPopulationCurrent;

//SAVE INTO DATABASE test
// $sql= "INSERT INTO 2019F_niedzwid.p2_data(login  , id , avg , pop  , mydatetime)
//                                        values( 'stete', 1 ,666, 1234 ,CURRENT_TIMESTAMP() ) ";

$check= "SELECT * FROM 2019F_niedzwid.p2_data WHERE login = '$loginName'  ";
$rs = mysqli_query($con,$check);
$data = mysqli_fetch_array($rs);
if($data) {

      $sql = "UPDATE 2019F_niedzwid.p2_data SET avg=$averageWageCurrent , pop = $estimatedPopulationCurrent  WHERE id= $uidPassed";

      $updateresult = mysqli_query($con,$sql);
      echo $updateresult;


} //THIS CHECKS IF CODE ALREADY EXISTS IN DATABASE , IF IT DOES IT DOESNT ADD TO DATABASE
    else{
      $sql= "INSERT INTO 2019F_niedzwid.p2_data(login  , id , avg , pop  , mydatetime)
                    values( '$loginName', $uidPassed , $averageWageCurrent , $estimatedPopulationCurrent , CURRENT_TIMESTAMP() ) ";

                         //THIS PUSHES INTO THE DATABASE
                       $updateresult = mysqli_query($con,$sql);
                       echo $updateresult;
    }

 // $query=mysqli_query( $con, "SELECT * FROM vDV_Data1 ")
//  or die("Could not execute query: " .mysqli_error($conn));

// $sql= "INSERT INTO  CPS3740_2019S.Money_niedzwid (cid,  sid ,code,   type , amount ,mydatetime , note )
//   values($cid, $source ,'$code' , '$type' , $amount, CURRENT_TIMESTAMP(), '$note')";

//  $sql= "INSERT INTO 2019F_niedzwid.project2_data( $loginName, $uidPassed ,$averageWageCurrent, $estimatedPopulationCurrent ,CURRENT_TIMESTAMP() );
 // $sql= "INSERT INTO 2019F_niedzwid.project2_data (login  , id , avg , pop  , mydatetime)
 //        values( $loginName, $uidPassed ,$averageWageCurrent, $estimatedPopulationCurrent ,CURRENT_TIMESTAMP() )"

 // $sql= "INSERT INTO 2019F_niedzwid.project2_data(login  , id , avg , pop  , mydatetime)
 //                                        values( 10, 2 ,666, 1234 ,CURRENT_TIMESTAMP() ) ";
 //    $updateresult = mysqli_query($con,$sql);
     // INSERT INTO 2019F_niedzwid.project2_data (login  , id , avg , pop  , mydatetime)
    //        values( 12, 123 ,987, 9879 ,CURRENT_TIMESTAMP() );

  // $cid = $_COOKIE['cookie']; //now we have the id, which we can use to query table and update
  // echo $cid;
  //
  //  $data = json_encode($cid);
  //   echo '$data';
            // $code=$_POST['code']; //code
            // $type=$_POST['type']; //type`
            // $amount=$_POST['amount']; //amount

            // $source=$_POST['source_id']; //source (Atm,online,..)
            // $note=$_POST['note']; //note
            // $total=$_POST['totalBal'];

// $check= "SELECT * FROM CPS3740_2019S.Money_niedzwid WHERE code = '$code'  ";  //CHECKS IF DATA IS IN DATABASE
// $rs = mysqli_query($con,$check);
// $data = mysqli_fetch_array($rs);

                // if($data) {
                //     echo "Error adding to database, transaction code already exists <br/>";
                // } //THIS CHECKS IF CODE ALREADY EXISTS IN DATABASE , IF IT DOES IT DOESNT ADD TO DATABASE
                //
                //
                // else{
                //     $sql= "INSERT INTO  CPS3740_2019S.Money_niedzwid (cid,  sid ,code,   type , amount ,mydatetime , note )
                //     values($cid, $source ,'$code' , '$type' , $amount, CURRENT_TIMESTAMP(), '$note')";
                //     //inserts after verifying
                //
                //     $updateresult = mysqli_query($con,$sql);
                // //check if update is successful or not
                //
                //     echo "Succesfully completed the transaction";
                //     echo "<BR>";
                //     echo " Total is  : $newAmount";
                // }//end of else clause

?>
