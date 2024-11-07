<?php

    //modelo
    class Funcionario {

        //atributos
        public $nome = null;
        public $telefone = null;
        public $numFilhos = null;

        //métodos
        function resumirCadFunc() {
            return "$this->nome possui $this->numFilhos filho(s)";

        }

        function modificarNumFilhos($numFilhos){
            $this->numFilhos = $numFilhos;   
        }

        function modificaNome($nome){
            $this->nome = $nome;
        }

    }

    $y = new Funcionario();

    $y -> modificaNome("Rafael");
    $y -> modificarNumFilhos(3);
    echo $y->resumirCadFunc();    
?>
