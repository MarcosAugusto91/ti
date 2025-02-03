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
    @media (max-width: 390px) {
      .hide-on-extra-small {
        display: none;
      }
    }
    @media (max-width: 300px) {
      .hide-on-very-small {
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

    <?php //VALIDA SE O CHAMADO FOI DELETADO
        if(isset($_GET['delete']) && $_GET['delete'] === 'sucesso') { ?>
            <script> alert('Chamado excluído!');</script>
        <?php } ?>    
        
        <?php //VALIDA SE O CHAMADO FOI EDITADO
        if(isset($_GET['edicao']) && $_GET['edicao'] === 'sucesso') { ?>
            <script> alert('Chamado Editado!');</script>
        <?php } ?>

    <div class="container">
        <br>
        <?php
            $sql = "SELECT * FROM chamados";
            $res = $conexao->query($sql);
            $qtd = $res->num_rows;

            $sql = "SELECT * FROM usuarios";
            $resusuarios = $conexao->query($sql);
            $qtdusuarios = $resusuarios->num_rows;

            if($qtd > 0){
                print "<div class='table-responsive'>";
                print "<table class='table table-hover table-bordered table-sm'>";
                print "<thead class='thead-light'>"; // Alterei a cor do cabeçalho da tabela para branco
                print "<tr>";
                print "<th scope='col'>Chamado</th>";
                print "<th scope='col' class='hide-on-very-small'>Título</th>";
                print "<th scope='col' class='hide-on-small'>Categoria</th>";
                print "<th scope='col' class='hide-on-small'>Descrição do Usuário</th>";
                print "<th scope='col' class='hide-on-small'>Descrição do Técnico</th>";
                print "<th scope='col' class='hide-on-small'>Status</th>";
                print "<th scope='col' class='hide-on-small'>Valor</th>";
                print "<th scope='col' class='hide-on-small'>Usuário</th>";
                print "<th scope='col'>Editar</th>";
                print "<th scope='col' class='hide-on-extra-small'>Excluir</th>";
                print "</tr>";
                print "</thead>";
                print "<tbody>";

                while($row = $res->fetch_object()){
                    print "<tr>";
                    print "<td>" . $row -> id_chamado . "</td>";
                    print "<td class='hide-on-very-small'>" . $row -> titulo . "</td>";
                    print "<td class='hide-on-small'>" . $row -> categoria . "</td>";
                    print "<td class='hide-on-small'>" . $row -> descricao . "</td>";
                    print "<td class='hide-on-small'>" . $row -> descricaotecnico . "</td>";
                    print "<td class='hide-on-small'>" . $row -> statuschamado . "</td>";                    
                    print "<td class='hide-on-small'>" . $row -> valor . "</td>";                    

                    $idchamado = $row -> id_chamado;
                    $idusuario = $row -> id_usuario;
                    $resusuarios->data_seek(0); // Reinicia o ponteiro do resultado da consulta de usuários
                    while ($user = $resusuarios->fetch_object()){
                        if ($user -> id_usuario == $idusuario){
                            print "<td class='hide-on-small'>" . $user -> nome . "</td>";
                            break; // Adicionado para sair do loop após encontrar o usuário
                        }
                    }
                    
                    print "<td>
                    <button class='btn btn-success btn-sm' onclick=\"location.href='edit_chamado.php?id=". $row -> id_chamado . "';\">Editar</button></td>";
                    print "<td class='hide-on-extra-small'>
                    <button class='btn btn-danger btn-sm' onclick=\"confirmDeletion(". $row -> id_chamado . ");\">Excluir</button></td>";

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
          if (confirm("Você realmente deseja excluir este chamado?")) {
              window.location.href = 'deletar_chamado.php?id=' + id;
          }
      }
    </script>

</body>

</html>