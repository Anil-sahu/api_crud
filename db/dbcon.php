<?php 
$server = "localhost";
$user ="root";
$password ="";
$db="CRUDDB";

$connection = mysqli_connect($server,$user,$password,$db);
if($connection){
    ?>
    
    <script>
    alert("Connection successful");
    </script>


 <?php 
}else{

    ?>
    <script>

        echo "connection is failed";
    </script>
    <?php
}

?>