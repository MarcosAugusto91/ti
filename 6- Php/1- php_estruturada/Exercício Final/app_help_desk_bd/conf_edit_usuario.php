<?php
    require_once "validador_acesso.php";
    require 'config.php';

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $perfil = $_POST['perfil'];
    $id_usuario = $_POST['id_usuario'];

    //Atualização de dados no banco
    $sql = "UPDATE usuarios SET nome = '$nome', email = '$email', perfil = '$perfil' WHERE id_usuario = $id_usuario";

    $res = $conexao->query($sql);

        if($res==true){
            //Redirecionando o arquivo e passando os dados para efetivar um aviso com alert em javascript
            header('location: usuarios.php?edicao=sucesso');
        } else { header('location: usuarios.php?edicao=falha');}
?>