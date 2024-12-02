<?php
    require_once "validador_acesso.php";
    require "config.php";
?>

<html>

<head>
  <meta charset="utf-8" />
  <title>App Help Desk</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


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
                print "<table class='table table-hover table-bordered'>";
                print "<tr>";
                print "<th>Chamado</th>";
                print "<th>Título</th>";
                print "<th>Categoria</th>";
                print "<th>Descrição</th>";
                print "<th>Usuário</th>";
                print "<th>Editar</th>";
                print "<th>Excluir</th>";
                print "</tr>";

                while($row = $res->fetch_object()){
                    print "<tr>";
                    print "<td>" . $row -> id_chamado . "</td>";
                    print "<td>" . $row -> titulo . "</td>";
                    print "<td>" . $row -> categoria . "</td>";
                    print "<td>" . $row -> descricao . "</td>";
                    
                    $idchamado = $row -> id_chamado;
                    $idusuario = $row -> id_usuario;
                    $resusuarios->data_seek(0); // Reinicia o ponteiro do resultado da consulta de usuários
                    while ($user = $resusuarios->fetch_object()){
                        if ($user -> id_usuario == $idusuario){
                            print "<td>" . $user -> nome . "</td>";
                            break; // Adicionado para sair do loop após encontrar o usuário
                        }
                    }
                    print "<td>
                    <button class='btn btn-success' onclick=\"location.href='edit_chamado.php?id=". $row -> id_chamado . "';\">Editar</button></td>";
                    print "<td>
                    <button class='btn btn-danger' onclick=\"location.href='deletar_chamado.php?id=". $row -> id_chamado . "';\">Excluir</button></td>";
                    print "</tr>";        
                }
                print "</table>";
            }
        ?>
    </div>
</body>

</html>