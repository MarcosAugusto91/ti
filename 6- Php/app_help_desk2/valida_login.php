<?php
session_start();

//Usuários pré-cadastrados
$usuarios = array(
    ['email' => 'marcosaugusto_gja@hotmail.com',    'senha' => '123'],
    ['email' => 'joyci_sn@hotmail.com',             'senha' => '123456'],
    ['email' => 'ariowsvaldo@hotmail.com',          'senha' => '0']
);

$usuarioAutenticado = false;

//RECEBENDO OS DADOS VIA MÉTODO GET
$emailUsuario = $_GET['email'];
$senhaUsuario = $_GET['senha'];

// AUTENTICANDO O USUÁRIO
for ($idx = 0; $idx < count($usuarios); $idx++) {
    if ($emailUsuario == $usuarios[$idx]['email'] && $senhaUsuario == $usuarios[$idx]['senha']) {
        $usuarioAutenticado = true;
        break;
    } else {
        $usuarioAutenticado = false;
    }
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

