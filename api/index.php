<?php
header('Access-Control-Allow-Origin: *');
$host = 'localhost'; // адрес сервера 
$database = 'musicschool'; // имя базы данных
$user = 'root'; // имя пользователя
$password = 'root'; // пароль

$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));
 
$query ="SELECT * FROM srtucture";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

$return= [];

if($result)
{
    $rows = mysqli_num_rows($result);
    
            for ($i = 0 ; $i < $rows ; ++$i){
                $row =  mysqli_fetch_assoc($result);
                $obj = [
                    "id" => $row['id'],
                    "depart"=>$row['depart'],
                    "name"=>$row['name'],
                    "info"=>$row['info'],
                    "img"=>$row['img'],
                    "year"=>$row['year'],
                    "director"=>$row['director'],
                    "position"=>$row['position'],
                    "date_01"=>$row['date_01'],
                    "date_02"=>$row['date_02'],
                     ];
                array_push($return,$obj);
}
echo json_encode($return,JSON_UNESCAPED_UNICODE);
}
mysqli_close($link);
?>

