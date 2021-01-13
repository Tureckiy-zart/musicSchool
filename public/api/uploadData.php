<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$host = 'localhost'; // адрес сервера 
$database = 'musicschool'; // имя базы данных
$user = 'root'; // имя пользователя
$password = 'root'; // пароль
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

$tmp_name = $_FILES['img']['tmp_name'];

$file_name = $_FILES['img']['name'];
$img_way = '/img/groupMusic/' . $file_name;

move_uploaded_file($tmp_name,'./img/groupMusic/' . $file_name);

$title = trim($_POST['title']);
$year = trim($_POST['year']);
$director = trim($_POST['director']);
$info = trim($_POST['discription']);
$position = trim($_POST['position']);

$query ="INSERT INTO srtucture (id,depart,name, info, img ,year, director, position)
     VALUES (null, 'groupMusic', '$title', '$info', '$img_way', '$year', '$director', '$position')";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result){
    echo $tmp_name;
    echo $file_name;
}
?>