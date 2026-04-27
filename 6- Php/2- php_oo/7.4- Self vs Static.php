<?php 
    class Modelo {
        public static $tabela = 'base_table';
    
        public static function getTabelaSelf() {
            return self::$tabela;
        }
    
        public static function getTabelaStatic() {
            return static::$tabela;
        }
    }
    
    class Usuario extends Modelo {
        public static $tabela = 'users';
    }
    
    // Testando as diferenças:
    echo 'Self: ';        
    echo Usuario::getTabelaSelf();   // Saída: base_table
    
    echo '</br>';

    echo 'Static: ';
    echo Usuario::getTabelaStatic(); // Saída: users

?>