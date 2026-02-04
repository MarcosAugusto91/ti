<?php 
    $nome = 'Marcos Augusto de Azevedo';
    $idade = '34 Anos';
    $profissao = 'professor';

    //Comentário

    /* Concatenando Opção 1: */
    $fichaCompleta = '<strong>Nome:</strong> ' . $nome . ' - <strong>Idade:</strong> ' . $idade . ' - <strong>Profissão:</strong> ' . $profissao . '.';
    echo 'Opção 1: ' .  $fichaCompleta;
    echo '<hr>';

    /* Opção 2 */
    $fichaCompleta = "<strong>Nome:</strong> $nome - ";
    $fichaCompleta .= "<strong>Idade:</strong> $idade - ";
    $fichaCompleta .= "<strong>Profissão:</strong> $profissao.";
    echo 'Opção 2: ' . $fichaCompleta . '<hr>';

    /* Opção 3 */
    $fichaCompleta = "Meu nome é {$nome}, tenho {$idade} anos e sou {$profissao}.";
    echo 'Opção 3: ' . $fichaCompleta . '<hr>';

    /* Opção 4 */
    echo "Opção 4: Meu <strong>nome</strong> é {$nome}, tenho {$idade} anos e sou {$profissao}.";
?>