<?php

$conn = mysqli_connect("localhost:3306","root","root","projetweb");
mysqli_query($conn , 'UPDATE `lieu` SET `STATUT` = '2' WHERE `lieu`.`ID` = 1');

