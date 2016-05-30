<?php
	
	$username = $_POST['username'];
	$password = $_POST['password'];

	//echo "<pre>"; print_r ($_POST);


	if($username == "consulta" && $password == "consulta"){
		echo true;
	}else
		echo false;

?>