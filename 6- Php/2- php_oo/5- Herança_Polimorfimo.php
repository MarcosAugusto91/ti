<?php

    /*

    HERANÇA: 
    Poder herdar atributos e métodos de uma classe pai (Modelo)

    POLIMORFISMO: 
    Mesmo herdando atributos ou métodos do pai, o filho tem liberdade para 
    ter o mesmo atributo ou método diferente do pai;
    
    */

    abstract class Veiculo {

        public $ano = null;
        public $velocidade = null;
        public $cor = null;
        public $nome = null;

        function acelerar() 
        { echo "acelerar"; }

        function freiar()
        { echo "freiar"; }

        function marcha()
        { echo "Pé para embreagem e mão para passar macha!"; 
        }

        function __get($atributo){
            return $this-> $atributo;
        }

        function __set($atributo,$valor){
            $this->$atributo = $valor;
        }

    }

    class Carro extends Veiculo {
        public $tetosolar;

    }


    Class Moto extends Veiculo{
        function marcha()
        { echo "Mão para embreagem e pé para passar macha!"; }
    }

    Class Caminhao extends Veiculo{
        function cacamba() 
        { echo "Possui caçamba!"; }
    }

    $ferrari = new Carro();
    $honda = new Moto();
    $volvo = new Caminhao();

    $ferrari -> __set("nome","Ferrari");
    $ferrari -> __set("cor","Vermelho");
    $ferrari -> __set("velocidade","250 km/h");
    $ferrari -> __set("ano","2024");
    $ferrari -> __set("tetosolar","Sim");

    echo "<b>Carro " . $ferrari ->__get("nome") . "</b>";
    echo "<br/>";
    echo "Cor: " . $ferrari ->__get("cor");
    echo "<br/>";
    echo "Velocidade: " . $ferrari ->__get("velocidade");
    echo "<br/>";
    echo "Ano de Fabricação: " . $ferrari ->__get("ano");
    echo "<br/>";
    echo "Possui teto solar: " . $ferrari ->__get("tetosolar");
    echo "<br/>";
    echo $ferrari->marcha();
    echo "<br/>";     
    echo "<hr>";  

    echo "<b>Moto Honda: </b>";
    echo $honda->marcha();
    echo "<hr>";

    echo "<b>Caminhão Volvo: </b>";
    echo $volvo-> cacamba();
    echo "<hr>";

    //echo $ferrari-> cacamba();
?>