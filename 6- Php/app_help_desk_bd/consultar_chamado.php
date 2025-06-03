<?php
  require_once "validador_acesso.php";
  require "config.php";

// Ajusta a consulta SQL com base no perfil do usuário
if ($_SESSION['perfil'] != 'Adm') {
    $sql = "SELECT * FROM chamados WHERE id_usuario = {$_SESSION['id']}";
} else {
    $sql = "SELECT * FROM chamados";
}

  $res = $conexao->query($sql);
  $qtd = $res->num_rows;

  $sql = "SELECT * FROM usuarios";
  $resusuarios = $conexao->query($sql);
  $qtdusuarios = $resusuarios->num_rows;
?>

<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="icon" href="imagens/logo.png" type="image/x-icon">

    <style>
      .card-consultar-chamado {
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
    </nav>

    <div class="container">    
      <div class="row">

        <div class="card-consultar-chamado">
          <div class="card">
            <div class="card-header">
              Consulta de chamado
            </div>
            
            <div class="card-body">
              
            <!-- Rodamos um foreach passando por todos os chamados -->
              <?php while($row = $res->fetch_object()){ ?>

              <div class="card mb-3 bg-light">
                <div class="card-body">

                  <!-- Nos 3 itens abaixo aplicamos os valores respectivos em cada um deles -->
                  <h5 class="card-title"><?php echo $row -> titulo ?></h5>
                  <h6 class="card-subtitle mb-2 text-muted">Categoria: <?php echo $row -> categoria ?></h6>
                  <p class="card-text">Descrição: <?php echo $row -> descricao ?></p>
                  <h6 class="card-subtitle mb-2 text-muted" style="text-align: right;">
                    <?php 
                    $idchamado = $row -> id_chamado;
                    $idusuario = $row -> id_usuario;
                    $resusuarios->data_seek(0); // Reinicia o ponteiro do resultado da consulta de usuários
                    while ($user = $resusuarios->fetch_object()){
                        if ($user -> id_usuario == $idusuario){ 
                          echo '<p style="color: green; margin-bottom: 2px;"> Usuário: ' . $user -> nome . '</p>';
                            break; // Sair do loop após encontrar o usuário
                        }
                      }
                    ?>
                  </h6>
                  <h6 class="card-title" style="text-align: right;">Ordem de Serviço: <?php echo $row -> id_chamado ?></h6>
                </div>
              </div>
              <?php } ?>
              
              <div class="row mt-5">
                <div class="col-6">
                  <a class="btn btn-lg btn-warning btn-block" href="home.php">Voltar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>