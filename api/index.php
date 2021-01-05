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
                    "date_01"=>$row['date_01'],
                    "date_02"=>$row['date_02'],
                ];
                array_push($return,$obj);
}
echo json_encode($return,JSON_UNESCAPED_UNICODE);
}


// ---------------------
// {
// <?php
// header('Access-Control-Allow-Origin: *');
// $host = 'http://mschool.zzz.com.ua/'; // адрес сервера 
// $database = 'tureckiy'; // имя базы данных
// $user = 'tureckiy'; // имя пользователя
// $password = '0_zH84mqV155'; // пароль

// $link = mysqli_connect($host, $user, $password, $database) 
//     or die("Ошибка " . mysqli_error($link));
 
// $query ="SELECT * FROM srtucture";
// $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

// $return= [];

// if($result)
// {
//     $rows = mysqli_num_rows($result);
    
//             for ($i = 0 ; $i < $rows ; ++$i){
//                 $row =  mysqli_fetch_assoc($result);
//                 $obj = [
//                     "id" => $row['id'],
//                     "depart"=>$row['depart'],
//                     "name"=>$row['name'],
//                     "info"=>$row['info'],
//                     "img"=>$row['img'],
//                     "year"=>$row['year'],
//                     "director"=>$row['director'],
//                     "date_01"=>$row['date_01'],
//                     "date_02"=>$row['date_02'],
//                 ];
//                 array_push($return,$obj);
// }
// echo json_encode($return,JSON_UNESCAPED_UNICODE);
// }
//     // echo "<pre>";
//     //   print_r($obj);
//     //   echo "</pre>";

//     };
//     $arr = array_unique($return);
//    $returnObj = [];
//    $item = [];

   
//     // echo json_encode($arr, JSON_UNESCAPED_UNICODE);
//     foreach ($arr as $key => $value) {
//         $query ="SELECT * FROM srtucture WHERE depart='$value'";
//         $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
//         $rows = mysqli_num_rows($result);
//         // echo $rows  . "\n";
//         for ($i = 0 ; $i < $rows ; ++$i){
//             $row =  mysqli_fetch_assoc($result); 





//             $depart = $row['depart'];
//             $info = $row['info'];
//             $name = $row['name'];
//             $img = $row['img'];
//             $year = $row['year'];
//             $director = $row['director'];
//             $date_01 = $row['date_01'];
//             $date_02 = $row['date_02'];

//             $itemData = [
//                 'name' => $name,
//                 'info' =>  $info,     
//                 'img' =>  $img,     
//                 'year' =>  $year,     
//                 'director' =>  $director,     
//                 'date_01' =>  $date_01,     
//                 'date_02' =>  $date_02,     
//             ];


//     // echo "<pre>";
//     // //   print_r($result);
//     //   print_r($itemData);
//     //   echo "</pre>";


      
    
    
// }
// $returnObj[$depart] = $item;
// array_push($item,$itemData);
//         // $row =  mysqli_fetch_assoc($result); 
//         // $depart = $row['depart'];
//         // $info = $row['info'];
        
//         // $returnObj[$depart] = $info;
        
//     }
//     // print_r($returnObj);
//     echo json_encode($returnObj, JSON_UNESCAPED_UNICODE);
// }
mysqli_close($link);




?>

}
//------------------------













//     // echo "<pre>";
//     //   print_r($obj);
//     //   echo "</pre>";

//     };
//     $arr = array_unique($return);
//    $returnObj = [];
//    $item = [];

   
//     // echo json_encode($arr, JSON_UNESCAPED_UNICODE);
//     foreach ($arr as $key => $value) {
//         $query ="SELECT * FROM srtucture WHERE depart='$value'";
//         $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
//         $rows = mysqli_num_rows($result);
//         // echo $rows  . "\n";
//         for ($i = 0 ; $i < $rows ; ++$i){
//             $row =  mysqli_fetch_assoc($result); 





//             $depart = $row['depart'];
//             $info = $row['info'];
//             $name = $row['name'];
//             $img = $row['img'];
//             $year = $row['year'];
//             $director = $row['director'];
//             $date_01 = $row['date_01'];
//             $date_02 = $row['date_02'];

//             $itemData = [
//                 'name' => $name,
//                 'info' =>  $info,     
//                 'img' =>  $img,     
//                 'year' =>  $year,     
//                 'director' =>  $director,     
//                 'date_01' =>  $date_01,     
//                 'date_02' =>  $date_02,     
//             ];


//     // echo "<pre>";
//     // //   print_r($result);
//     //   print_r($itemData);
//     //   echo "</pre>";


      
    
    
// }
// $returnObj[$depart] = $item;
// array_push($item,$itemData);
//         // $row =  mysqli_fetch_assoc($result); 
//         // $depart = $row['depart'];
//         // $info = $row['info'];
        
//         // $returnObj[$depart] = $info;
        
//     }
//     // print_r($returnObj);
//     echo json_encode($returnObj, JSON_UNESCAPED_UNICODE);
// }
mysqli_close($link);




?>