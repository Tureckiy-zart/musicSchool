<?php
header('Access-Control-Allow-Origin: *');
$host = 'localhost'; // адрес сервера 
$database = 'musicschool'; // имя базы данных
$user = 'root'; // имя пользователя
$password = 'root'; // пароль

$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));
 
// $query ="SELECT * FROM srtucture";
$query ="SELECT depart FROM srtucture ORDER BY depart";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

$return= [];

if($result)
{
    $rows = mysqli_num_rows($result); // количество полученных строк
     
    for ($i = 0 ; $i < $rows ; ++$i)
    {
      $row =  mysqli_fetch_assoc($result); 
    //   echo "<pre>";
    //   print_r($row);
    //   echo "</pre>";
    //   echo $row["name"];
        // print_r($row);
// $obj = [
//     "depart" => $row['depart'],
//     // "name" => $row['name'],
//     // "info" => $row['info'],
//     // "img" => $row['img'],
//     // "year" => $row['year'],
//     // "director" => $row['director'],
//     // "date_01" => $row['date_01'],
//     // "date_02" => $row['date_02'],
// ];

array_push($return, trim($row['depart']));

    // echo "<pre>";
    //   print_r($obj);
    //   echo "</pre>";

    };
    $arr = array_unique($return);
   $object = [];
   $a = [];
   $b = [];
   $c = [];
   $d = [];
   
    // echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    foreach ($arr as $key => $value) {
        $query ="SELECT * FROM srtucture WHERE depart='$value'";
        $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
        $rows = mysqli_num_rows($result);
        // echo $rows  . "\n";
        for ($i = 0 ; $i < $rows ; ++$i){
            $row =  mysqli_fetch_assoc($result); 
            $depart = $row['depart'];
            $info = $row['info'];
            $name = $row['name'];
            $year = $row['year'];

            $ooooo = [
                'name' => $name,
                'info' => $info,    
            ];
            array_push($a,$ooooo);

            $object[$depart] = $a;
                
            
        }
        // $row =  mysqli_fetch_assoc($result); 
        // $depart = $row['depart'];
        // $info = $row['info'];
        
        // $object[$depart] = $info;
        
    }
    // print_r($object);
    echo json_encode($object, JSON_UNESCAPED_UNICODE);
}
mysqli_close($link);




?>