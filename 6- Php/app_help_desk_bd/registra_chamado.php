<?php
    require_once "validador_acesso.php";
    require 'config.php';

    $titulo = $_POST['titulo'];
    $categoria = htmlspecialchars($_POST['categoria']);
    $descricao = $_POST['descricao'];
    $id_usuario = $_SESSION['id'];

    //Inserção de dados no banco
    $sql = "INSERT INTO chamados(titulo, categoria, descricao, id_usuario) VALUES('{$titulo}', '{$categoria}', '{$descricao}', '{$id_usuario}')";

    $res = $conexao->query($sql);

        if($res==true){
            //Redirecionando o arquivo e passando os dados para efetivar um aviso com alert em javascript
            header('location: abrir_chamado.php?cadastro=efetuado');
        } else { header('location: abrir_chamado.php?cadastro=falha');}
?>