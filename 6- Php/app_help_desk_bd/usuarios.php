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

    <?php //VALIDA SE O USUÁRIO FOI DELETADO
        if(isset($_GET['delete']) && $_GET['delete'] === 'sucesso') { ?>
            <script> alert('Usuário excluído!');</script>
        <?php } ?>

        <?php //VALIDA SE O CHAMADO FOI EDITADO
        if(isset($_GET['edicao']) && $_GET['edicao'] === 'sucesso') { ?>
            <script> alert('Usuário Editado!');</script>
        <?php } ?>

    <div class="container">
        <br>
        <?php

            $sql = "SELECT * FROM usuarios";
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
                print "<th scope='col'>Editar</th>";
                print "<th scope='col' class='hide-on-extra-small'>Excluir</th>";
                print "</tr>";
                print "</thead>";
                print "<tbody>";

                while($row = $res->fetch_object()){
                    print "<tr>";
                    print "<td>" . $row -> id_usuario . "</td>";
                    print "<td>" . $row -> nome . "</td>";
                    print "<td class='hide-on-small'>" . $row -> email . "</td>";
                    print "<td class='hide-on-small'>" . $row -> perfil . "</td>";
                    
                    print "<td><button class='btn btn-success btn-sm' onclick=\"location.href='edit_usuario.php?id=". $row -> id_usuario . "';\">Editar</button></td>";
                    print "<td class='hide-on-extra-small'><button class='btn btn-danger btn-sm' onclick=\"confirmDeletion(". $row -> id_usuario . ");\">Excluir</button></td>";

                    print "</tr>";                       
                }
                print "</tbody>";
                print "</table>";
                print "</div>";
            }

        ?>
    </div>

    <script>
      function confirmDeletion(id) {
          if (confirm("Você realmente deseja excluir este Usuário?")) {
              window.location.href = 'deletar_usuario.php?id=' + id;
          }
      }
    </script>

</body>

</html>