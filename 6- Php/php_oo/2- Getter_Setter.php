<?php
    //modelo
    class Funcionario {
        
        //atributos
        public $nome = null;
        public $sobrenome = null;
        public $telefone = null;
        public $numFilhos = null;
        public $cargo = null;
        public $salario = null;
        public $musica = null;
        public $esporte = null;
        public $altura = null;
        public $peso = null;


        //métodos
        function setNome($nome){
            $this->nome = $nome;
        }

        function setNumFilhos($numFilhos){
            $this->numFilhos = $numFilhos;
        }

        function getNumFilhos(){
            return $this->numFilhos;
        }

        function getNome(){
            return $this->nome;
        }

        function resumirCadFunc() {
            return "$this->nome possui $this->numFilhos filho(s)";
        } 

        function __set($atributo, $valor){
            $this->$atributo = $valor;
        }

        function __get($atributo){
            return $this->$atributo;
        }
    
    }
    //Criando um usuário usando a Classe(modelo) Funcionário
    $y = new Funcionario();

    $y->setNome("Marcos");
    $y->setNumFilhos(0);
    $y->__set("cargo","Professor");
    $y->__set("salario","9.999,00");

    echo "Teste funcionário Y: </br>";
    echo $y->resumirCadFunc();
    echo "</br>";

    echo $y->getNome() ." possui ". $y->getNumFilhos() ." filho(s)";
    echo "</br>";

    echo "Seu cargo é ".$y->__get("cargo")." e recebe R$". $y->__get("salario")."<hr>";

    $x = new Funcionario();
    echo "Teste funcionário X: </br>";
    $x-> __set("nome","Joyci");
    $x-> __set("telefone","(13) 996038918");
    $x-> __set("numFilhos","0");
    $x-> __set("cargo","Chefe de Cozinha");
    $x-> __set("salario","5.500,00");

    echo "Funcionario X: </br>";
    echo $x-> __get("nome") . " possui " . $x -> __get("numFilhos") . " filhos</br>";
    echo "Telefone: " . $x-> __get("telefone") . ", seu cargo é " . $x->__get("cargo") . " e recebe R$" . $x->__get("salario");

    $m = new Funcionario();
    $m-> __set("nome","Fred");
    $m-> __set("sobrenome","Mercury");
    $m-> __set("musica","Rock");
    $m-> __set("esporte","Volei");
    echo "<hr>";
    echo "Teste funcionário M: </br>";
    echo $m-> __get("nome") . " " . $m-> __get("sobrenome") . " ama " . $m-> __get("musica") . " e joga " . $m-> __get("esporte");


?>