<?php

    //Validando caso existe algum pipe será trocado por traço, 
    //para que não ocorra erro de posição;
    $titulo = str_replace("|" , "-", $_POST["titulo"]);
    $categoria = str_replace("|" , "-", $_POST["categoria"]);
    $descricao = str_replace("|" , "-", $_POST["descricao"]);
    
    //Concatenamos as informações em uma string
    $conteudo = $titulo . "|" . $categoria . "|" . $descricao . PHP_EOL; 

    //Abrindo arquivo, inserindo os dados, fechando o arquivo
    $arquivo = fopen("chamados.txt", "a");
    fwrite($arquivo, $conteudo);
    fclose($arquivo);
    header("location:abrir_chamado.php");
        
?>