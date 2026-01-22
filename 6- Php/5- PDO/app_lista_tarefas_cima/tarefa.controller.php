<?php
    require '../../../app_lista_tarefas_cima/tarefa.model.php';
    require '../../../app_lista_tarefas_cima/tarefa.service.php';
    require '../../../app_lista_tarefas_cima/conexao.php';

	echo '<pre>';
	print_r($_POST);
	echo '</pre>';

	$tarefa = new Tarefa();
	$tarefa->__set('tarefa', $_POST['tarefa']);

	$conexao = new Conexao();

	$tarefaService = new TarefaService($conexao, $tarefa);
	$tarefaService->inserir();

	echo '<pre>';
	print_r($tarefaService);
	echo '</pre>';

?>