<?php

	require "./bibliotecas/lib1/lib1.php";
	require "./bibliotecas/lib2/lib2.php";

	use A\Cliente as C1;
	use B\Cliente as C2;

	$c = new C1();
	print_r($c);
	echo $c->__get('nome');

	$c = new C2();
	print_r($c);
	echo $c->__get('nome');