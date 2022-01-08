<?php
$servername = "mysqlcluster14";
$username = "chenova";
$password = "Chenova2020";
$databaseName = "chenova";

// Create connection
$conn = new mysqli($servername, $username, $password,$databaseName);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
?>

