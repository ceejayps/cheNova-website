<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$servername = "mysqlcluster14";
$username = "chenova";
$password = "Chenova2020";
$dbname = "chenova";
$id = $_POST['id'];
$Title = $_POST['Title'];
$body= $_POST['Body'];
$table = $_POST['Table'];
$name = $_POST['name'];
$address= $_POST['address'];
$email= $_POST['email'];
$phone= $_POST['phone'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


$queryName = "UPDATE `$table` SET `Title` = '".$Title."', `Body` = '".$body."'  WHERE `id` = '".$id."'";

$statement =$conn->prepare($queryName);
$statement->execute();

echo json_encode("Name Updated")


//, `address` = '".$address."', `email` = '".$email."', `phone` = '".$phone."'

?>