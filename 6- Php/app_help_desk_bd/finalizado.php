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
      padding: 5px;
      min-width: auto;
    }
    .thead-light th {
      background-color: #ffffff;
      font-weight: bold;
      text-align: center;
    }
    td, th {
      text-align: center;
    }
    .status-finalizado {
      background-color: #28a745; /* Fundo verde */
      color: #ffffff; /* Texto branco */
      font-weight: bold;
      width: 200px; /* Aumenta o espaço da coluna */
    }
    .total-chamados {
      text-align: left; /* Alinha à esquerda */
    }
    @media (max-width: 1000px) {
      .hide-on-small {
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
        <a class="nav-link" href="relatorios.php">VOLTAR</a>
      </li>
    </ul>
  </nav>

  <div class="container">
    <br>
    <?php
        $sql = "SELECT count(statuschamado) as 'Total' FROM chamados WHERE statuschamado ='Finalizado'";
        $res = $conexao->query($sql);
        $row = $res->fetch_assoc(); 
        $total = $row['Total'];

        $sql = "SELECT * FROM chamados WHERE statuschamado ='Finalizado'";
        $res = $conexao->query($sql);
        $qtd = $res->num_rows;

        $sql = "SELECT * FROM usuarios";
        $resusuarios = $conexao->query($sql);
        $qtdusuarios = $resusuarios->num_rows;

        if($qtd > 0){
            print "<div class='table-responsive'>";
            print "<table class='table table-hover table-bordered table-sm'>";
            print "<thead class='thead-light'>";
            print "<tr>";
            print "<th class='status-finalizado'> Status Finalizado </th>";
            print "<th colspan=4 class='total-chamados' style='text-align: left;'> $total Chamados</th>";
            print "</tr>";
            print "<tr>";
            print "<th scope='col'>Chamado</th>";
            print "<th scope='col'>Título</th>";
            print "<th scope='col' class='hide-on-small'>Categoria</th>";
            print "<th scope='col' class='hide-on-small'>Descrição</th>";
            print "<th scope='col'>Usuário</th>";
            print "</tr>";
            print "</thead>";
            print "<tbody>";

            while($row = $res->fetch_object()){
                print "<tr>";
                print "<td>" . $row -> id_chamado . "</td>";
                print "<td>" . $row -> titulo . "</td>";
                print "<td class='hide-on-small'>" . $row -> categoria . "</td>";
                print "<td class='hide-on-small'>" . $row -> descricao . "</td>";
                
                $idchamado = $row -> id_chamado;
                $idusuario = $row -> id_usuario;
                $resusuarios->data_seek(0); // Reinicia o ponteiro do resultado da consulta de usuários
                while ($user = $resusuarios->fetch_object()){
                    if ($user -> id_usuario == $idusuario){
                        print "<td>" . $user -> nome . "</td>";
                        break; // Adicionado para sair do loop após encontrar o usuário
                    }
                }
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