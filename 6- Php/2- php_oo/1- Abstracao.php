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

    $func1 = new Funcionario; //Instanciei minha classe em um objeto
    echo $func1->resumirCadFunc();
    echo "<br/>";  
    $func1 -> modificaNome("Rafael");
    $func1 -> modificarNumFilhos(3);
    echo    $func1->resumirCadFunc();  
    
    echo "<hr>"; 

    $func2 = new Funcionario;
    $func2 -> modificaNome("Marcos");
    $func2 -> modificarNumFilhos(0);
    echo    $func2->resumirCadFunc();    
?>