<?php
require 'classes/classes.php';

//RECEBENDO OS DADOS DO INDEX
$nome = $_GET['nome'];
$classe = $_GET['classe'];
$tipo = $_GET['tipo'];
$raca = $_GET['raca'];

$personagem = new $classe();

// if ($classe === 'Guerreiro') {
//     $personagem = new Guerreiro();
// } else if ($classe === 'Arqueiro') {
//     $personagem = new Arqueiro();
// } else if ($classe === 'Mago') {
//     $personagem = new Mago();
// } else if ($classe === 'Barbaro') {
//     $personagem = new Barbaro();
// } else if ($classe === 'Monge') {
//     $personagem = new Monge();
// } else if ($classe === 'Lutador') {
//     $personagem = new Lutador();
// } else if ($classe === 'Ladrao') {
//     $personagem = new Ladrao();
// } else if ($classe === 'Ninja') {
//     $personagem = new Ninja();
// } else if ($classe === 'Bardo') {
//     $personagem = new Bardo();
// } else if ($classe === 'Pirata') {
//     $personagem = new Pirata();
// } else if ($classe === 'Android') {
//     $personagem = new Android();
// } else if ($classe === 'Ogro') {
//     $personagem = new Ogro();
// } else if ($classe === 'Animal') {
//     $personagem = new Animal();
// } else if ($classe === 'Fantasma') {
//     $personagem = new Fantasma();
// } else if ($classe === 'Dinossauro') {
//     $personagem = new Dinossauro();
// } else if ($classe === 'Soldado') {
//     $personagem = new Soldado();
// } else if ($classe === 'Anao') {
//     $personagem = new Anao();
// } else if ($classe === 'Dragao') {
//     $personagem = new Dragao();
// } else if ($classe === 'Elfo') {
//     $personagem = new Elfo();
// } else if ($classe === 'Frankstein') {
//     $personagem = new Frankstein();
// } else if ($classe === 'Saci') {
//     $personagem = new Saci();
// } else if ($classe === 'Zumbi') {
//     $personagem = new Zumbi();
// } else if ($classe === 'Lobisomem') {
//     $personagem = new Lobisomem();
// }

//Setando os valores tipo e raça
$personagem->__set('classe', $classe);
$personagem->__set('tipo', $tipo);
$personagem->__set('raca', $raca);
?>

<html>

<head>
    <meta charset="utf-8" />
    <title>Projeto RPG</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link rel="stylesheet" href="estilos/Style.css">

    <style>
        .card-login {
            padding: 30px 0 0 0;
            width: 350px;
            margin: 0 auto;
        }
    </style>
</head>

<body>

    <nav class="navbar navbar-dark" style="background-color:#071222; margin-bottom:35px">
        <a class="navbar-brand" href="#">
            <img src="sources/logo.png" style="border-radius: 150px; margin-right: 5px;" width="30" height="30" class="d-inline-block align-top" alt="">
            Projeto RPG
        </a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="index.html">VOLTAR</a>
            </li>
        </ul>
    </nav>


    <div style="display:flex; height:85%; flex-flow:row; justify-content:center; align-items:center;" ;>
        <div class="container">
            <div class="row">
                <div class="card-login" style="width: 450px;">
                    <div class="card" style="background-color: transparent; backdrop-filter: blur(30px);opacity: 80%;">
                        <div class="card-header" style="color: white; text-align:center;">
                            <div style="display:flex; justify-content:space-around; align-items:center;">
                                <h3 style="margin:-5px; width:35%"><?php echo $nome; ?></h3>
                                <p style="margin: 0px; font-size:11px; width:100%; padding-top:5px; padding-left:10px;"><?php echo "{$personagem->__get('descricao')}"; ?></p>
                            </div>
                        </div>
                        <div class="card-body">
                            <form action="personagem.php" method="GET">
                                <div class="form-group" style="color: white; text-align:center;">
                                    <div style="display: flex; flex-flow:row; margin:-15px; justify-content:space-around; align-items:center;">
                                        <div style="display:flex;">
                                            <p style="margin: 0px;"><?php echo "<strong>Classe:</strong> {$personagem->__get('classe')} <br> <strong>Tipo:</strong> {$personagem->__get('tipo')} <br> <strong>Raça:</strong> {$personagem->__get('raca')}"; ?></p>
                                        </div>
                                        <img src="sources/<?php echo $personagem->__get('img'); ?>.png" style="padding-bottom: 15px; height:210px;" alt="Ícone de usuário">
                                    </div>


                                    <hr style="background-color:white">
                                    <h3>Atributos</h3>
                                    <p style="margin: 0px;"><?php echo "Força: {$personagem->__get('forca')} / Defesa: {$personagem->__get('defesa')}"; ?></p>
                                    <p style="margin: 0px;"><?php echo "Esquiva: {$personagem->__get('esquiva')} / Velocidade: {$personagem->__get('velocidade')}"; ?></p>
                                    <p style="margin: 0px;"><?php echo "Inteligência: {$personagem->__get('inteligencia')} / Vida: {$personagem->__get('vida')}"; ?>
                                        <hr style="background-color:white">

                                    <div style="display: flex; flex-flow:row; justify-content:space-around; margin-bottom:-5px;">
                                        <div>
                                            <h3>Ações</h3>
                                            <p style="margin: 0px;"><?php echo $personagem->ataqueComum(); ?></p>
                                            <p style="margin: 0px;"><?php echo $personagem->defender(); ?></p>
                                            <p style="margin: 0px;"><?php echo $personagem->esquivar(); ?></p>
                                            <p style="margin: 0px; margin-bottom:-20px"><?php echo $personagem->fugir(); ?></p>
                                        </div>
                                        <div>
                                            <h3>Especiais</h3>
                                            <p style="margin: 0px;"><?php echo $personagem->ataqueEspecial(); ?></p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</body>

</html>