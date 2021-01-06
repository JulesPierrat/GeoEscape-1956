<?php

// getting data from database projet_web

$conn = mysqli_connect("localhost:3306","root","root","projetweb");

//Verification de la connection
 

// getting data from records

$result = mysqli_query($conn , 'SELECT * FROM records ORDER BY time ASC');

// storing in array

$data = array();
while( $row = mysqli_fetch_assoc($result)){
	$data[] = $row;
}

// returning response in JSON format

echo json_encode($data);

//fermeture de la connection

mysqli_close($conn)

?>