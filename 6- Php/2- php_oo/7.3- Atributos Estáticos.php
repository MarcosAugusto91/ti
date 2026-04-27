<?php
class Usuario
{
    public static $totalUsuarios = 0; // Atributo estático

    public function __construct()
    {
        // Toda vez que um novo objeto é criado, incrementamos o contador global
        self::$totalUsuarios++;
    }
}

$user1 = new Usuario();
$user2 = new Usuario();
$user3 = new Usuario();

// Acessamos direto pela classe, sem precisar de um objeto específico
echo Usuario::$totalUsuarios; // Saída: 3
