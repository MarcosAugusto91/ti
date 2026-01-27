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
		$query = 'update tb_tarefas set tarefa = ? where id = ?';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(1, $this->tarefa->__get('tarefa'));
		$stmt->bindValue(2, $this->tarefa->__get('id'));
		return $stmt->execute();
	}

	public function remover() { //delete
		$query = 'delete from tb_tarefas where id = :id';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(':id', $this->tarefa->__get('id'));
		$stmt->execute();
	}

	public function marcarRealizada() {
		$query = 'update tb_tarefas set id_status = 2 where id = ?';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(1, $this->tarefa->__get('id'));
		$stmt->execute();
	}
}

?>