<?php

	require "conexao.php";


//busca no banco de dados

		$sql = "SELECT * FROM filtrados";

		// The mysql database connection script

		$result = mysql_query($sql, $link);
        
		//Declare uma array para colecionar todos os $rows
		$end_result = array();

		/*
   			Aqui, em vez de usar mysqli_fetch_array(), que devolve ambos
    		arrays associativas e arrays numericais, usa mysqli_fetch_assoc -
    		assim, consegue pegar uma array associativa assim:
    		['matricula'=>'182354X', 'nome'=>'RAFAEL CAMPOS PIMENTEL']
		*/
		
	while ($row = mysql_fetch_assoc($result)) {
    	//adicione essa array associativa à array normal
    	$end_result[] = $row;
	}

	//specifique-se que o conteúdo é do JSON - AngularJS vai gostar disso :D
	header('Content-Type: application/json');

	//Por fim, transforme o array em JSON e termina a execução.
	echo json_encode($end_result);


?>