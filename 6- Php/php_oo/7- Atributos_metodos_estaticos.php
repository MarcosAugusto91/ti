<?php

    class Estatico{
    
        public static $atributo1 = "Eu sou um atributo estático!";
        public $atributo2 = "Eu sou um atributo normal!";
        
        public static function metodo1(){
            //echo $this->atributo2;
            echo "Eu sou um método estático!";
        }

        public function metodo2(){
            echo "Eu sou um método normal!";
        }

        public function metodo3(){
            return "Eu sou um método normal!";
        }

    }

    //Nos métodos ou atributos normais nós precisamos instanciar a classe conforme demonstrado na linha abaixo:
    $exemplo1 = new Estatico();
    echo $exemplo1->atributo2;
    echo "<br/>";
    $exemplo1-> metodo2();
    echo "<br/>";
    echo $exemplo1-> metodo3();
    

    //Porém com atributos e métodos estáticos nós podemos aciona-los sem a necessidade de instanciar, utilizando o formato abaixo:
    echo "<hr>";
    echo Estatico::$atributo1;
    echo "<br/>";
    echo Estatico::metodo1();
    echo "<hr>";

    /*Não conseguiremos utilizar o operador seta com atributos e métodos estáticos:
    echo $exemplo1->atributo1; Com atributo realmente não funcionou;
    echo "<br/>";
    echo $exemplo1->metodo1(); Mas com método estranhamente este funcionou;
    */

    /*Se comentarmos neste arquivo a instancia do $exemplo1 e colocarmos o código abaixo dará erro pois o $atributo2 
    só consegue ser utilizado após ser instanciado, mesmo que esteja dentro de um método estático;

        public static function metodo1(){
            echo $this-> abrituto2;
            echo "Eu sou um método estático!";
        }
    */

?>