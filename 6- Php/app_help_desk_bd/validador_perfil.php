<?php
  if(!isset($_SESSION['perfil']) || ($_SESSION['perfil'] == 'Usuario')){
    header('location: home.php?permissao=nao');
  } else if(!isset($_SESSION['perfil']) || ($_SESSION['perfil'] == 'Tecnico')){
    header('location: home.php?permissao=nao');
  } else if(!isset($_SESSION['perfil']) || ($_SESSION['perfil'] == 'Tec')){
    header('location: home.php?permissao=nao');
  }
?>