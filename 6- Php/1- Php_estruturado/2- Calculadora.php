<html>
    <head>  
        <meta charset="utf-8"/>
    </head> 
    <body>

    <?php

        $peso = 65;
        $altura = 1.54;
        $imc = $peso / ($altura * $altura);

        echo 'Seu Imc é de: '. round($imc,2) . '</br>';

        if($imc < 18.5){
            echo 'Você está abaixo do peso!';
        } else if ($imc == 18.5 || $imc < 24.9) {
            echo 'Você está com peso normal!';
        } else {
            echo 'Você está acima do peso!';
        }

    ?> 
    </body>
</html>