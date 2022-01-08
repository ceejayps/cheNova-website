<?php
require('connection.php');

$makeQuery = "SELECT * FROM HomePage ";

$statement = $connection->prepare($makeQuery);

$statement->execute();

$myArray = array();

while ($resultFrom = $statement ->fetch()) {
array_push(
    $myArray ,array(
        'id' =>$resultFrom['id'],
        'Title' =>$resultFrom['Title'],
        'Body' =>$resultFrom['Body']
    ));
}
echo json_encode($myArray);

?>