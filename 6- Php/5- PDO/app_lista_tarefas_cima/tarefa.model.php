<?php
    class Tarefa{
        private $id, $id_status, $tarefa, $data_cadastro;
    
        public function __get($atributo){
            return $this->$atributo;
        }

        public function __set($atributo, $valor){
            $this->$atributo = $valor;
        }
        
    }




?>
