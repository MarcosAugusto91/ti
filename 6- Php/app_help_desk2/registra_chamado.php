<?php

    //Organizando os dados, retirando | dos possíveis valores
    $titulo = str_replace('|', '-', $_POST['titulo']);
    $categoria = str_replace('|', '-', $_POST['categoria']);
    $descricao = str_replace('|', '-', $_POST['descricao']);
    
    //Concatenando os valores de cada parâmetro, separado por |
    $dados = $titulo . '|' . $categoria . '|' . $descricao . PHP_EOL;

    //Abrindo o arquivo e armazenando em uma variável
    $arquivo = fopen('registros.hd','a');
    
    //Escrevendo no arquivo
    fwrite($arquivo, $dados);
    //Fechando o arquivo
    fclose($arquivo);

    //Redirecionando o arquivo e passando os dados para efetivar um aviso com alert em javascript
    header('location: abrir_chamado.php?cadastro=efetuado')
?>