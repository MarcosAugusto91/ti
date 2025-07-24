<?php
require_once 'MascoteMagico.php';
require_once 'Dragao.php';
require_once 'Unicornio.php';
require_once 'Fenix.php';

$mascotes = [
    new Dragao("Firagon", 500, "vermelho", "fogo"),
    new Unicornio("Lumi", 120, "branco", "de cristal"),
    new Fenix("Ashara", 300, "dourado", 7),
];
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Mascotes Mágicos</title>
    <style>
        body {
            font-family: 'Comic Sans MS', cursive;
            background-color: #f3f0ff;
            padding: 30px;
        }
        .mascote {
            background-color: #fff;
            padding: 20px;
            margin-bottom: 20px;
            border-left: 10px solid #a17fe0;
            border-radius: 10px;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
        }
        .mascote h2 {
            margin: 0;
            color: #5e35b1;
        }
        .som {
            font-style: italic;
            color: #7e57c2;
        }
    </style>
</head>
<body>
    <h1>🌟 Mascotes Mágicos Adotados 🌟</h1>

    <?php foreach ($mascotes as $m): ?>
        <div class="mascote">
            <h2><?= $m->getNome() ?> (<?= get_class($m) ?>)</h2>
            <p><strong>Idade:</strong> <?= $m->getIdade() ?> anos</p>
            <p><strong>Cor:</strong> <?= $m->getCor() ?></p>
            <p class="som"><strong>Som:</strong> <?= $m->emitirSom() ?></p>
            <p><strong>Habilidade:</strong> <?= $m->habilidadeEspecial() ?></p>
        </div>
    <?php endforeach; ?>
</body>
</html>
