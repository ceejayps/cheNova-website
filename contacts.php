<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$servername = "mysqlcluster14";
$username = "chenova";
$password = "Chenova2020";
$dbname = "chenova";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id,name, address, email,phone FROM contacts";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $arr = [];
    
    while ($row = $result->fetch_assoc()) {
        # code...
        $jsonArrayObject = (array('id' => $row["id"], 'name' => $row["name"], 'email' => $row["email"], 'phone' => $row["phone"], 'address' => $row["address"]));
        $arr[] = $jsonArrayObject;
        
    }
    $json_array = json_encode($arr);
    echo $json_array;
} else {
  echo "0 results";
}