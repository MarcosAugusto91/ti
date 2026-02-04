<?php

    // echo $_GET["nome"] . '<br>';
    // echo $_GET["peso"] . '<br>';
    // echo $_GET["altura"];

    $nome = $_GET['nome'];
    $peso = $_GET['peso'];
    $altura = $_GET['altura'];

    $imc = $peso / ($altura * $altura);
    $imc = round($imc, 2);
    echo "Olá {$nome} seu Imc é de: <strong>{$imc}</strong></br>";

    if ($imc < 18.5) {
        echo 'Você está abaixo do peso!';
    } else if ($imc == 18.5 || $imc < 24.9) {
        echo 'Você está com peso normal!';
    } else {    
        echo 'Você está acima do peso!';
    }
?>