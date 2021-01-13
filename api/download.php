<?php
header('Access-Control-Allow-Origin: *');
$file = 'doc1.txt';
echo __DIR__ . '/doc1.txt';
if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($file).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);  

    exit;
}
    ?>