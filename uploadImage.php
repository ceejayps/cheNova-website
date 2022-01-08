<?php 

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$file = $_FILES['file'];
$name = $_POST['name'];
$fileName = $_FILES['file']['name'];
$fileTmpName = $_FILES['file']['tmp_name'];
$fileSize = $_FILES['file']['size'];
$fileError = $_FILES['file']['error'];
$fileType = $_FILES['file']['type'];

$fileExt = explode('.',$fileName);
$fileActualExt = strtolower(end($fileExt));

$allowed = Array('jpg', 'jpeg', 'png');
if(empty($name)){
    echo json_encode("there be a file name");
}
else{
    if(in_array($fileActualExt, $allowed)){
        if($fileError === 0)
        {
            if($fileSize < 10000000){
                $fileNameNew = $name;
                //uniqid('',true).".".$fileActualExt;
                $fileDestination = 'assets/images/'.$fileNameNew;
                move_uploaded_file($fileTmpName,$fileDestination);
                echo json_encode('file uploaded success');
    
            }
            else{
                echo json_encode("your file is too big, must be 9MBs or less");
                }
            
    
        }else{      
            echo json_encode("there was an error uploading your file");
            }
        
    }
    
    else{
        echo json_encode("you can not upload file of this type");
    }
}
?>