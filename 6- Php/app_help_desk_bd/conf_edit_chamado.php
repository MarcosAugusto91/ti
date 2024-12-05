<?php
    require_once "validador_acesso.php";
    require 'config.php';

    $titulo = $_POST['titulo'];
    $categoria = $_POST['categoria'];
    $id_chamado = $_POST['id_chamado'];
    $descricaotecnico = $_POST['descricaotecnico'];
    $statuschamado = $_POST['status'];
    $valor = $_POST['valor'];

    //Atualização de dados no banco
    $sql = "UPDATE chamados SET titulo = '$titulo', categoria = '$categoria', descricaotecnico = '$descricaotecnico', statuschamado = '$statuschamado', valor = '$valor' WHERE id_chamado = $id_chamado";

    $res = $conexao->query($sql);

        if($res==true){
            //Redirecionando o arquivo e passando os dados para efetivar um aviso com alert em javascript
            header('location: editar_chamado.php?edicao=sucesso');
        } else { header('location: editar_chamado.php?edicao=falha');}
?>