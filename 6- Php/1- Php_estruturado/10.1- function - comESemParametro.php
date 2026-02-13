<?php

    function bemVindo(){
        echo 'Bem vindo!';
    }

    function bemVindoComParametro($nome){
        echo 'Bem vindo ' . $nome .'!';
    }

    bemVindo();

    echo '<br>';

    bemVindoComParametro('Marcos');

?>