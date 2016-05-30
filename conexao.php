<?php

$servidor = 'localhost';
$banco = 'zurik048_remonitor';
$usuario = 'zurik048_re';
$senha = 'comunicacoes';

$link = mysql_connect($servidor, $usuario, $senha);
$db = mysql_select_db($banco);

if(!$link){
	echo "Erro ao conectar ao banco de dados!"; exit();
}

?>