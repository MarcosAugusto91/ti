<?php
  session_start(); 

  if(!isset($_SESSION["autenticado"]) or $_SESSION['autenticado'] != "SIM"){
    header('location:index.php?login=erro2');
  }

?>