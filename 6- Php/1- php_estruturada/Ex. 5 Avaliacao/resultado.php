<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Resultado da Pesquisa</title>
</head>
<body>
    <h2>Resultado da Pesquisa</h2>

    <?php
    $sexos = $_POST['sexo'];
    $respostas = $_POST['resposta'];

    $sim = 0;
    $nao = 0;

    $homens = 0;
    $homensNao = 0;
    $mulheres = 0;
    $mulheresNao = 0;

    for ($i = 0; $i < count($sexos); $i++) {
        $sexo = $sexos[$i];
        $resposta = $respostas[$i];

        if ($resposta == 'S') $sim++;
        else $nao++;

        if ($sexo == 'M') {
            $homens++;
            if ($resposta == 'N') $homensNao++;
        } else {
            $mulheres++;
            if ($resposta == 'N') $mulheresNao++;
        }
    }

    echo "Número de pessoas que responderam <strong>Sim</strong>: $sim<br>";
    echo "Número de pessoas que responderam <strong>Não</strong>: $nao<br><br>";

    if ($homens > 0) {
        $percHomensNao = ($homensNao / $homens) * 100;
        echo "Porcentagem de <strong>homens</strong> que responderam Não: " . number_format($percHomensNao, 2) . "%<br>";
    }

    if ($mulheres > 0) {
        $percMulheresNao = ($mulheresNao / $mulheres) * 100;
        echo "Porcentagem de <strong>mulheres</strong> que responderam Não: " . number_format($percMulheresNao, 2) . "%<br>";
    }
    ?>
</body>
</html>
