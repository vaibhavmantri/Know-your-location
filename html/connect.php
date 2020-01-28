<?
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$Email = $_POST['email'];
$Area = $_POST['area'];

///Database Connection
$con = new mysqli('localhost','root','','vaibhav');
if($conn->connect_error){
    die('Connection failed : ' .$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(firstName,lastName,Email,Area)value(?,?,?,?)");
    $stmt ->bind_param("ssss",$firstName,$lastName,$Email,$Area);
    $stmt ->execute();
    echo"registration success";
    $stmt->close();
    $conn->close();
}
?>