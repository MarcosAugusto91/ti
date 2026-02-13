<?php 
    $numeros = ['10','5','7','8','9', ];

    echo $numeros[2] . '<br>';

    echo $resultado = $numeros[2] * $numeros[4];
    echo '<br>';

    $num = rand(1, 10);
        if (!in_array($num, $numeros)){
            $numeros[] = $num;
            $indice = count($numeros);
            echo $numeros[$indice-1] . ' = ';
            echo '<pre>';
            print_r($numeros);
            echo '</pre>';
        } else {
            echo "Número sorteado {$num} já existe na lista!";
        }
?>