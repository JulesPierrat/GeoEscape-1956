<?php

/*$dtime = $_POST(["value"])
print_r($dtime)*/
$dtime = $_GET['time'];
$date = $_GET['date'];
$conn = mysqli_connect("localhost:3306","root","root","projetweb");
$requete = "INSERT INTO `records` (`id`, `pseudo`, `time`, `date`) VALUES (NULL, 'You', '".$dtime."' , '".$date."')";
mysqli_query($conn , $requete);

?>