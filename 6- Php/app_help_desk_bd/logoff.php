<?php
    session_start();

    // Remover índices do array de sessão
    // unset($_SESSION['autenticado']);

    // Destruir a variável/array de sessão
    session_destroy();
    header('location: index.php');
?>