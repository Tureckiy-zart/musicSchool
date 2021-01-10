<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");


if (!empty($_POST)){
    $name = trim($_POST['img']);}


// echo 'cdsffdsssssssss'

// $data = var_dump($_POST);
// echo var_dump($_FILES['img']);
// echo var_dump($_POST);

// print_r($data);


?>