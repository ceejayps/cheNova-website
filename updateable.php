<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$servername = "";
$username = "";
$password = "";
$dbname = "";
$id = 1;
$Title;
$body;
$table;
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


$queryName = "UPDATE `contacts` SET `address` = '".$address."', `email` = '".$email."', `phone` = '".$phone."'  WHERE `id` = '".$id."'";

$statement =$conn->prepare($queryName);
$statement->execute();

echo json_encode("Name Updated")


//, `address` = '".$address."', `email` = '".$email."', `phone` = '".$phone."'

?>
