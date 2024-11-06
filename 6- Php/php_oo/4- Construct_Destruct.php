<?php

class Pessoa{

     public $nome = null;

    function __construct($nome){
        echo 'objeto iniciado';
        $this-> nome = $nome;
    }

    function __destruct(){
        echo '<br/><br/> Objeto removido';
    }


    function __get($atributo){
        return $this-> $atributo;
    }

    function __set($atributo,$valor){
        $this-> $atributo = $valor;
    }

    function correr(){
        return '<br/>' . $this-> __get('nome') . ' esta correndo!';
    }
}


    $pessoa = new Pessoa('Marcos');
    //unset($pessoa); 
    echo '<br/> Nome: ' . $pessoa-> __get('nome');
    
    echo $pessoa-> correr();

    $pessoa-> __set('nome','Jorge');
    echo '<br/> Nome atualizado: ' . $pessoa-> __get('nome'); 

    unset($pessoa); 
    
?>
