<?php

    //MODELO
    class PersonagemQuadrinho{

        //ATRIBUTOS
        public $forcaBruta;
        public $agilidade;
        public $inteligencia;

        //MÉTODOS
        public function exibirAtributos(){
            return "Força: $this->forcaBruta <br>
                    Agilidade: $this->agilidade <br>
                    Inteligência: $this->inteligencia <hr>";
        } 

        public function alteraAtributos($forca,$agilidade,$inteligencia){
            $this->forcaBruta = $forca;
            $this->agilidade = $agilidade;
            $this->inteligencia = $inteligencia;
        }
    }

    $spiderman = new PersonagemQuadrinho;
    $superman = new PersonagemQuadrinho;
    $batman = new PersonagemQuadrinho;

    $spiderman -> alteraAtributos(75,80,80);
    $batman -> alteraAtributos(65,70,100);
    $superman -> alteraAtributos(100,90,75);

    echo $spiderman -> exibirAtributos();
    echo $batman -> exibirAtributos();
    echo $superman -> exibirAtributos();  
?>