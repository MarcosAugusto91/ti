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
  <link rel="icon" href="imagens/logo.png" type="image/x-icon">

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
    <a class="navbar-brand" href="#">
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
            Menu
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-2 d-flex justify-content-center">
                <a href="abrir_chamado.php">
                  <img src="../app_help_desk_bd/imagens/formulario_abrir_chamado.png" width="70" height="70">
                  <p>&nbsp&nbsp&nbsp&nbspAbrir</p>
                </a>

              </div>
              <div class="col-2 d-flex justify-content-center">
                <a href="consultar_chamado.php">
                  <img src="../app_help_desk_bd/imagens/formulario_consultar_chamado.png" width="70" height="70">
                  <p>Consultar</p>
                </a>
              </div>

              <?php if ($row->perfil != 'Adm' && $row->perfil != 'Tec') { ?>
                <div class="col-2 d-flex justify-content-center">
                  <a href="#" style="filter: grayscale(100%); opacity: 0.5;">
                    <img src="../app_help_desk_bd/imagens/editar-arquivo.png" width="70" height="70">
                    <p>&nbspEditar</p>
                  </a>
                </div>

                <div class="col-2 d-flex justify-content-center">
                <a href="#" style="filter: grayscale(100%); opacity: 0.5;">
                  <img src="../app_help_desk_bd/imagens/autorizacao.png" width="70" height="70">
                  <p>Autorizar</p>
                </a>
              </div>

              <div class="col-2 d-flex justify-content-center">
                <a href="#" style="filter: grayscale(100%); opacity: 0.5;">
                  <img src="../app_help_desk_bd/imagens/usuarios.png" width="70" height="70">
                  <p>&nbspUsuários</p>
                </a>
              </div>

              <div class="col-2 d-flex justify-content-center">
                <a href="#" style="filter: grayscale(100%); opacity: 0.5;">
                  <img src="../app_help_desk_bd/imagens/relatorio.png" width="70" height="70">
                  <p>Relatórios</p>
                </a>
              </div>

              <?php } else if ($row-> perfil == 'Tec') { ?>
                <div class="col-2 d-flex justify-content-center">
                  <a href="editar_chamado.php">
                    <img src="../app_help_desk_bd/imagens/editar-arquivo.png" width="70" height="70">
                    <p>&nbspEditar</p>
                  </a>
                </div>

                <div class="col-2 d-flex justify-content-center">
                <a href="#" style="filter: grayscale(100%); opacity: 0.5;">
                  <img src="../app_help_desk_bd/imagens/autorizacao.png" width="70" height="70">
                  <p>Autorizar</p>
                </a>
              </div>

              <div class="col-2 d-flex justify-content-center">
                <a href="#" style="filter: grayscale(100%); opacity: 0.5;">
                  <img src="../app_help_desk_bd/imagens/usuarios.png" width="70" height="70">
                  <p>&nbspUsuários</p>
                </a>
              </div>

              <div class="col-2 d-flex justify-content-center">
                <a href="#" style="filter: grayscale(100%); opacity: 0.5;">
                  <img src="../app_help_desk_bd/imagens/relatorio.png" width="70" height="70">
                  <p>Relatórios</p>
                </a>
              </div>

                <?php } else { ?>
                <div class="col-2 d-flex justify-content-center">
                  <a href="editar_chamado.php">
                    <img src="../app_help_desk_bd/imagens/editar-arquivo.png" width="70" height="70">
                    <p>&nbspEditar</p>
                  </a>
                </div>

                <div class="col-2 d-flex justify-content-center">
                <a href="autorizar_usuarios.php">
                  <img src="../app_help_desk_bd/imagens/autorizacao.png" width="70" height="70">
                  <p>Autorizar</p>
                </a>
              </div>

              <div class="col-2 d-flex justify-content-center">
                <a href="usuarios.php">
                  <img src="../app_help_desk_bd/imagens/usuarios.png" width="70" height="70">
                  <p>&nbspUsuários</p>
                </a>
              </div>

              <div class="col-2 d-flex justify-content-center">
                <a href="relatorios.php">
                  <img src="../app_help_desk_bd/imagens/relatorio.png" width="70" height="70">
                  <p>Relatórios</p>
                </a>
              </div>
              <?php } ?>

            </div>
          </div>
        </div>

        <div class="card-home">
          <div class="card">
            <img src="imagens/helpdesk.svg" alt="Banner" height="230px">
            <h6 style="text-align: center;">App Help Desk</h6>
            <p style="text-align: center;">Assistência de qualidade para sua empresa!</p>
          </div>
        </div>

      </div>
    </div>
</body>
</html>