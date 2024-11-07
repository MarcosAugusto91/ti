<?php
    class Exemplo {
        public static $atributo1 = 'Eu sou um atributo static';
        public $atributo2 = 'Eu sou atributo normal';

        public static function metodo1(){
           // echo $this->atributo2; //dará erro!
            echo 'Eu sou um método estático';
        }

        public function metodo2(){
            echo 'Eu sou um método normal';
        }
    }

    //$x = new Exemplo();
    /* Atributos e métodos estáticos podem ser acessados diretamente, sem precisar instanciar */
    /* echo Exemplo::$atributo1;
    echo '<br />';
    echo Exemplo::metodo1(); */
    //echo Exemplo::$metodo2(); //Atualização-> Não funciona mais.
    //echo $x->atributo2; //instancia só acessa atributos e metodos não estaticos
    Exemplo::metodo1();