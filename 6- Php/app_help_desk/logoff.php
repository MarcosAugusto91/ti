<?php

    session_start();

    /*1º Opção: unset($_SESSION["autenticado"]);
        Excluí apenas o índice selecionado; */

    //2º Opção:
    session_destroy();
    header('location:index.php');
?>