<?php
$pseudo = $_GET['pseudo'];
$conn = mysqli_connect("localhost:3306","root","root","projetweb");
$requete = "UPDATE records SET pseudo = '". $pseudo ."' WHERE records.pseudo LIKE 'You'";
mysqli_query($conn , $requete);

?>