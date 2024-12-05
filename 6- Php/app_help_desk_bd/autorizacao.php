<?php
require_once "validador_acesso.php";
require_once "config.php";

if($_GET['autorizar'] == 'simA'){
    $sql = "UPDATE usuarios SET perfil = 'Adm' WHERE id_usuario = {$_GET['id']}";
    $res = $conexao->query($sql);
    header('location: autorizar_usuarios.php?usuario=adm');
} else if($_GET['autorizar'] == 'simT'){
    $sql = "UPDATE usuarios SET perfil = 'Tec' WHERE id_usuario = {$_GET['id']}";
    $res = $conexao->query($sql);
    header('location: autorizar_usuarios.php?usuario=tec');
} else{
    $sql = "UPDATE usuarios SET perfil = 'Usuario' WHERE id_usuario = {$_GET['id']}";
    $res = $conexao->query($sql);
    header('location: autorizar_usuarios.php?usuario=usuario');
}
?>

<html>
