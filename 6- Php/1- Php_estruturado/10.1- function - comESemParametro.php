<?php

    function bemVindo(){
        echo 'Bem vindo!';
    }

    function bemVindoComParametro($nome){
        echo 'Bem vindo ' . $nome .'!';
    }

    function bemVindoComRetorno($nome){
        return 'Bem vindo ' . $nome .'!';
    }

    bemVindo();

    echo '<br>';

    bemVindoComParametro('Marcos');

    echo '<br>';
    echo bemVindoComRetorno('Marcos');

?>