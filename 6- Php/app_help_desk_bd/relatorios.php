<?php
require_once "validador_acesso.php";
require_once "config.php";

$sql = "SELECT perfil FROM usuarios WHERE id_usuario ={$_SESSION['id']}";
$res = $conexao->query($sql);
$row = $res->fetch_object();
?>

<html>

<head>
  <meta charset="utf-8" />
  <title>App Help Desk</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <style>
    .card-home {
      padding: 30px 0 0 0;
      width: 100%;
      margin: 0 auto;
    }
  </style>
</head>

<body>

  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="home.php">
      <img src="../app_help_desk_bd/imagens/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      App Help Desk
    </a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="logoff.php">SAIR</a>
      </li>
    </ul>
  </nav>

  <div class="container">
    <div class="row">

      <div class="card-home">
        <div class="card">
          <div class="card-header">
            Chamados
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-4 d-flex justify-content-center">
                <a href="abrir_chamado.php" class="text-danger">
                  <img src="../app_help_desk_bd/imagens/abertos.png" width="70" height="70">
                  <p>&nbsp Abertos</p>
                </a>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <a href="consultar_chamado.php" style="color:darkorange">
                  <img src="../app_help_desk_bd/imagens/andamento.png" width="70" height="70">
                  <p>Andamento</p>
                </a>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <a href="consultar_chamado.php" style="color:teal">
                  <img src="../app_help_desk_bd/imagens/finalizados.png" width="70" height="70">
                  <p>Finalizados</p>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</body>
</html>