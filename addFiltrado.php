<?php

	require "conexao.php";


//Inclusão no banco de dados

			$data = $_POST["data"];
			$node = $_POST["node"];
			$tratamento = $_POST["tratamento"];
			$endereco = $_POST["endereco"];
		    /*$contrato = $_POST["contrato"];
			$datavt = $_POST["datavt"];
			$tecnico = $_POST["tecnico"];
			$descricao = $_POST["descricao"];*/

		$sql = "INSERT INTO filtrados (data, node, tratamento, endereco) VALUES ('$data','$node', '$tratamento', '$endereco')";


		mysql_query($sql, $link);


?>