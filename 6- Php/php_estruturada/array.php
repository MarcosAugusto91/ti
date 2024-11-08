<?php

//$frutas = array('banana','maçã','morango');

// $frutas = [];

 $frutas = ['b' => 'banana', 'm' => 'maçã', 'f' => 'morango'];

 echo '<pre>';
 var_dump($frutas);
 echo '</pre>';

 echo '<pre>';
 print_r($frutas);
 echo '</pre>';

 echo $frutas['b'];

 $_cadastroAlunos['nomes'] = ['Marcos', 'Leticia', 'Daniel', ' Gaby', 'Lucas'];
 $_cadastroAlunos['idade'] = [33,16,33,20,18];

 echo '<pre>';
 var_dump($_cadastroAlunos);
 echo '</pre>';

?>