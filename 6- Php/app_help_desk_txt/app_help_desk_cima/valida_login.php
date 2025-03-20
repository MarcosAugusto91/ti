<?php
session_start();

//Usuários pré-cadastrados
$usuarios = array(
    ['id' => '1', 
    'perfil' => 'adm', 
    'nome' => 'Marcos', 
    'email' => 'marcosaugusto_gja@hotmail.com',    
    'senha' => '123'],
    ['id' => '2',
    'perfil' => 'user',
    'nome' => 'Joyci',
    'email' => 'joyci_sn@hotmail.com',
    'senha' => '123456'],
    ['id' => '3',
    'perfil' => 'user',
    'nome' => 'Ariosvaldo',
    'email' => 'ariosvaldo@hotmail.com',
    'senha' => '0']
);

$usuarioAutenticado = false;

//RECEBENDO OS DADOS VIA MÉTODO GET
$emailUsuario = $_GET['email'];
$senhaUsuario = $_GET['senha'];

// AUTENTICANDO O USUÁRIO
for ($idx = 0; $idx < count($usuarios); $idx++) {
    if ($emailUsuario == $usuarios[$idx]['email'] && $senhaUsuario == $usuarios[$idx]['senha']) {
        $usuarioAutenticado = true;
        $_SESSION['id'] = $usuarios[$idx]['id'];
        $_SESSION['perfil'] = $usuarios[$idx]['perfil'];
        $_SESSION['nome'] = $usuarios[$idx]['nome'];
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
?>