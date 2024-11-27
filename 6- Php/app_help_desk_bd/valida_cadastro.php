<?php
    include ('config.php');

    echo '<pre>';
    var_dump($_POST);
    echo '</pre>';
   
    if($_POST['perfil'] === "-- Selecione --")
    {
        header('location: cadastro.php?validaperfil=erro');
    } else {

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = md5($_POST['senha']);
        $perfil = $_POST['perfil'];


        $sql = "INSERT INTO usuarios(nome, email, senha, perfil) VALUES('{$nome}', '{$email}', '{$senha}', '{$perfil}')";

        $res = $conexao->query($sql);

        if($res==true){
            header('location: cadastro.php?usuario=sucesso');
        } else { header('location: cadastro.php?usuario=falha');}

        
    }

?>