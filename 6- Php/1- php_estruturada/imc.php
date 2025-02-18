<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Calculadora IMC</title>
</head>

<body>
    <form action="imc.php" method="POST">
        <div class="container">
            <div class="card">
                <h1>Calculadora IMC</h1>
                <div class="label-float">
                    <input name="peso" type="text" id="nome" placeholder=" " required />
                    <label id="labelNome" for="peso">Digite seu Peso</label>
                </div>
                <div class="label-float">
                    <input name="altura" type="text" id="usuario" placeholder=" " required />
                    <label id="labelUsuario" for="altura">Digite sua Altura</label>
                </div>

                <div name="resultado"></div>

                <div class="justify-center">
                    <button type="submit" class='cadastrar'>Cadastrar</button>
                </div>
            </div>
        </div>
    </form>
</body>

</html>

<?php
    $peso = 65;
    $altura = 1.54;
    $imc = $peso / ($altura * $altura);

    echo 'Seu Imc é de: ' . round($imc, 2) . '</br>';

    if ($imc < 18.5) {
        echo 'Você está abaixo do peso!';
    } else if ($imc == 18.5 || $imc < 24.9) {
        echo 'Você está com peso normal!';
    } else {
        echo 'Você está acima do peso!';
    }
?>