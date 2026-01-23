<?php
    require '../../../app_lista_tarefas_cima/tarefa.model.php';
    require '../../../app_lista_tarefas_cima/tarefa.service.php';
    require '../../../app_lista_tarefas_cima/conexao.php';

	$acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;

    if ($acao == 'inserir'){
		$tarefa = new Tarefa();
		$tarefa->__set('tarefa', $_POST['tarefa']);

		$conexao = new Conexao();

		$tarefaService = new TarefaService($conexao, $tarefa);
		$tarefaService->inserir();

		header('Location: nova_tarefa.php?inclusao=1');
	} 
	else if ($acao == 'recuperar'){
		$tarefa = new Tarefa();
		$conexao = new Conexao();
		$tarefaService = new TarefaService($conexao, $tarefa);
		$tarefas = $tarefaService->recuperar();
	}
?>