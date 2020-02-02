<?php
require_once("config.php");
var_dump($_POST);
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$email = $_POST['email'];
$area = $_POST['area'];
$feedback = $_POST['feedback'];
$areaArray = [
    "Azad Nagar",
    "Kakadeo",
    "Panki",
    "Armapur",
    "Panki",
    "Awas Vikas",
    "Rawatpur",
    "Swaroop Nagar",
    "Harsh Nagar",
    "Permat",
    "Kalyanpur",
    "Naubasta",
    "Cantt",
    "Kidwai Nagar",
    "Jajmau",
    "General Ganj",
    "Yashoda Nagar",
    "Govind Nagar",
    "Nawab Ganj",
    "Shukla Ganj"
];
///Database Connection
$con = new mysqli($host, $user, $pass, $db);
function sS($txt) {
    global  $con;
    return $con -> real_escape_string($txt);
}
if ($con->connect_error) {
    die('Connection failed : ' . $con->connect_error);
} else {
    $firstName = sS($firstName);
    $lastName = sS($lastName);
$email = sS($email);
$area = sS($areaArray[intval($_POST['area'])-1]);
$feedback = sS($feedback);
    $con->query("insert into registration(firstName,lastName,email,area,feedback)value('$firstName','$lastName','$email','$area', '$feedback')");
    // echo $con->error;
    $con->close();
  
    echo  "Your form has been submitted successfully.";
}
