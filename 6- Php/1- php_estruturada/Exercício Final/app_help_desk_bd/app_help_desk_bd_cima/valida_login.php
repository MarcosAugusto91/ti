<?php
session_start();
require 'config.php';

$usuarioAutenticado = false;

//RECEBENDO OS DADOS VIA MÉTODO GET
$emailUsuario = $_GET['email'];
$senhaUsuario = md5($_GET['senha']);

//BUSCANDO NO BANCO AS INFORMAÇÕES
    $sql = "SELECT * FROM usuarios WHERE email='{$emailUsuario}'";
    $res = $conexao->query($sql);
    $row = $res->fetch_object();

// AUTENTICANDO O USUÁRIO
    if ($emailUsuario == $row->email && $senhaUsuario == $row->senha) {
        $usuarioAutenticado = true;
        $_SESSION['id'] = $row-> id_usuario;
        $_SESSION['perfil'] = $row->perfil;
        $_SESSION['nome'] = $row->nome;
    } else {
        $usuarioAutenticado = false;
    }

if($usuarioAutenticado){
    // VALIDANDO A SESSÃO
    $_SESSION['autenticado'] = 'sim';
    header('location: home.php');
} else {
    // VALIDANDO A SESSÃO
    $_SESSION['autenticado'] = 'nao';
    header('location: index.php?login=erro');
}

