<?php
    require_once "validador_acesso.php";
    require "config.php";
?>

<html>
<head>
  <meta charset="utf-8" />
  <title>App Help Desk</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="icon" href="imagens/logo.png" type="image/x-icon">
  <style>
    .table-responsive {
      overflow-x: auto;
    }
    .btn-sm {
      padding: 5px; /* Define um padding de 5px para os botões */
      min-width: auto; /* Remove a largura mínima */
    }
    .thead-light th {
      background-color: #ffffff; /* Define a cor de fundo branco */
      font-weight: bold; /* Define o texto em negrito */
      text-align: center; /* Centraliza o texto */
    }
    td, th {
      text-align: center; /* Centraliza o conteúdo das células */
    }
    @media (max-width: 1000px) {
      .hide-on-small {
        display: none;
      }
    }
    @media (max-width: 300px) {
      .hide-on-extra-small {
        display: none;
      }
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
        <a class="nav-link" href="home.php">VOLTAR</a>
      </li>
    </ul>
  </nav>
    <div class="container">
        <br>
        <?php

          if(isset($_GET['usuario']) && $_GET['usuario'] == 'adm'){?>
            <script>alert('Usuário atribuido como Administrador')</script><?php
          } else if(isset($_GET['usuario']) && $_GET['usuario'] == 'tec') { ?>
            <script>alert('Usuário atribuido como Técnico')</script><?php
          } else if(isset($_GET['usuario']) && $_GET['usuario'] == 'usuario') { ?>
            <script>alert('Usuário atribuido como Usuário')</script><?php
          }

            $sql = "SELECT * FROM usuarios where perfil ='Administrador' or perfil = 'Tecnico';";
            $res = $conexao->query($sql);
            $qtd = $res->num_rows;

            if($qtd > 0){
                print "<div class='table-responsive'>";
                print "<table class='table table-hover table-bordered table-sm'>";
                print "<thead class='thead-light'>"; // Cabeçalho branco com texto em negrito
                print "<tr>";
                print "<th scope='col'>ID</th>";
                print "<th scope='col'>Usuário</th>";
                print "<th scope='col' class='hide-on-small'>E-mail</th>";
                print "<th scope='col' class='hide-on-small'>Perfil</th>";
                print "<th scope='col'>Autorizar</th>";
                print "</tr>";
                print "</thead>";
                print "<tbody>";

                while($row = $res->fetch_object()){
                    print "<tr>";
                    print "<td>" . $row -> id_usuario . "</td>";
                    print "<td>" . $row -> nome . "</td>";
                    print "<td class='hide-on-small'>" . $row -> email . "</td>";
                    print "<td class='hide-on-small'>" . $row -> perfil . "</td>";
            
                    if ($row -> perfil == 'Administrador'){
                    print "<td><button class='btn btn-success btn-sm' onclick=\"location.href='autorizacao.php?id=". $row -> id_usuario . "&autorizar=simA';\">S</button>
                    <button class='btn btn-danger btn-sm' onclick=\"location.href='autorizacao.php?id=". $row -> id_usuario . "&autorizar=nao';\">N</button></td>"; } 
                    else if ($row -> perfil == 'Tecnico'){
                      print "<td><button class='btn btn-success btn-sm' onclick=\"location.href='autorizacao.php?id=". $row -> id_usuario . "&autorizar=simT';\">S</button>
                    <button class='btn btn-danger btn-sm' onclick=\"location.href='autorizacao.php?id=". $row -> id_usuario . "&autorizar=nao';\">N</button></td>";}

                    print "</tr>";        
                }
                print "</tbody>";
                print "</table>";
                print "</div>";
            }
        ?>
    </div>
</body>
</html>