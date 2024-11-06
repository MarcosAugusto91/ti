<?php

    session_start();

    $usuarios = array(
        array("email" => "marcosaugusto_gja@hotmail.com", "senha" => "123456"),
        array("email" => "joyci_sn@hotmail.com", "senha" => "123456"),
    );  
    $idx = 0;
    $usuarioAutenticado = false;

    foreach ($usuarios as $user){
    /*        
        echo 'Usuário Back-end: ' . $user['email'] . ' Senha: ' . $user['senha'];   
        echo '<hr>';
        echo 'Usuário Formulário: ' . $_POST['email'] . ' Senha: ' . $_POST['senha'];   
        echo '<hr>';
    */

        if ($user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha']){
            $usuarioAutenticado = true;
            $_SESSION['autenticado'] = 'sim';
        };
    }   

        if ($usuarioAutenticado == true){
            echo 'Usuário autenticado';
            $_SESSION = array('autenticado' => 'SIM'); 
            header('location:home.php');
        } else {
            $_SESSION = array('autenticado' => 'NÃO');
            header('location:index.php?login=erro');
                }

?>