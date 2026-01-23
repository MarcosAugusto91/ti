<?php

//CRUD
class TarefaService {

	private $conexao;
	private $tarefa;

	public function __construct(Conexao $conexao, Tarefa $tarefa) {
		$this->conexao = $conexao->conectar();
		$this->tarefa = $tarefa;
	}

	public function inserir() { //create
		$query = 'insert into tb_tarefas(tarefa)values(:tarefa)';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(':tarefa', $this->tarefa->__get('tarefa'));
		$stmt->execute();
	}

	public function recuperar() { //read
		$query = 'select 
					t.id, s.status, t.tarefa 
				 from 
				 	tb_tarefas as t
					left join tb_status as s on (t.id_status = s.id)
				';
		$stmt = $this->conexao->prepare($query);
		$stmt-> execute();
		return $stmt-> fetchAll(PDO::FETCH_OBJ);
	}

	public function atualizar() { //update

	}

	public function remover() { //delete

	}
}

?>