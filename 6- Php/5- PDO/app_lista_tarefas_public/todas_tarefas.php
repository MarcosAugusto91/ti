<?php
	$acao = 'recuperar';
	require 'tarefa.controller.php';
?>

<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>App Lista Tarefas</title>

		<link rel="stylesheet" href="css/estilo.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

		<script>
			function editar(id){
				//criar um form de edição
				let form = document.createElement('form');
				form.action = 'tarefa.controller.php?acao=atualizar';
				form.method = 'post';
				form.className = 'row';

				//criar um input para entrada da tarefa
				let inputTarefa = document.createElement('input');
				inputTarefa.type = 'text';
				inputTarefa.name = 'tarefa';
				inputTarefa.className = 'col-9 form-control';

				//criar um input hidden para guardar o id da tarefa
				let inputId = document.createElement('input');
				inputId.type = 'hidden';
				inputId.name = 'id';
				inputId.value = id;

				//criar um button para o envio do form
				let button = document.createElement('button');
				button.type = 'submit';
				button.className = 'col-3 btn btn-info';
				button.innerHTML = 'Atualizar';

				//incluir inputTarefa e button dentro do form
				form.appendChild(inputTarefa);

				//incluir button no form 
				form.appendChild(button);

				//incluir inputId no form
				form.appendChild(inputId);

				//selecionar a div tarefa
				let tarefa = document.getElementById('tarefa_' + id);
				
				//Carregando texto que estava na tarefa para o input
				inputTarefa.value = tarefa.innerText;

				//limpar o texto da tarefa para incluir o form
				tarefa.innerHTML = '';

				//incluir o form na página
				tarefa.insertBefore(form, tarefa[0]);
				//tarefa.appendChild(form);

				//colocando foco no input
				inputTarefa.focus();
			}

			function remover(id){
				location.href = 'tarefa.controller.php?acao=remover&id=' + id;
			}

			function marcarRealizada(id){
				location.href = 'tarefa.controller.php?acao=marcarRealizada&id=' + id;
			}	
		</script>

	</head>

	<body>
		<nav class="navbar navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img src="img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
					App Lista Tarefas
				</a>
			</div>
		</nav>

		<div class="container app">
			<div class="row">
				<div class="col-sm-3 menu">
					<ul class="list-group">
						<li class="list-group-item"><a href="index.php">Tarefas pendentes</a></li>
						<li class="list-group-item"><a href="nova_tarefa.php">Nova tarefa</a></li>
						<li class="list-group-item active"><a href="#">Todas tarefas</a></li>
					</ul>
				</div>

				<div class="col-sm-9">
					<div class="container pagina">
						<div class="row">
							<div class="col">
								<h4>Todas tarefas</h4>
								<hr />

								<?php foreach($tarefas as $indice => $tarefa){ ?>

								
								<div class="row mb-3 d-flex align-items-center tarefa">
									<div class="col-sm-9" id="tarefa_<?= $tarefa->id ?>">
										<?= $tarefa->tarefa ?> (<?= $tarefa->status ?>)
										<script>
											if('<?= $tarefa->status ?>' == 'realizado'){
												document.getElementById('tarefa_<?= $tarefa->id ?>').style.textDecoration = 'line-through';
											}
										</script>
									</div>
									<div class="col-sm-3 mt-2 d-flex justify-content-between">
										<i class="fas fa-trash-alt fa-lg text-danger" onclick="remover(<?= $tarefa->id ?>)"></i>

										<?php if($tarefa->status == 'pendente'){ ?>
										
										<i class="fas fa-edit fa-lg text-info" 
										onclick="editar(<?= $tarefa->id ?>)"></i>
										<i class="fas fa-check-square fa-lg text-success"
										onclick="marcarRealizada(<?= $tarefa->id ?>)"></i>
										<?php } ?>	

									</div>
								</div>
								<?php } ?>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>