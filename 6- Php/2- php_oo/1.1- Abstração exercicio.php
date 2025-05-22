<?php

    //MODELO
    class PersonagemQuadrinho{

        //ATRIBUTOS
        public $forcaBruta;
        public $agilidade;
        public $inteligencia;
        public $nome;

        //MÉTODOS
        public function exibirAtributos(){
            return 
                   "Nome: $this->nome <br>
                    Força: $this->forcaBruta <br>
                    Agilidade: $this->agilidade <br>
                    Inteligência: $this->inteligencia <hr>";
        } 

        public function alteraAtributos($nome, $forca,$agilidade,$inteligencia){
            $this->nome = $nome;
            $this->forcaBruta = $forca;
            $this->agilidade = $agilidade;
            $this->inteligencia = $inteligencia;
        }
    }

    $spiderman = new PersonagemQuadrinho;
    $superman = new PersonagemQuadrinho;
    $batman = new PersonagemQuadrinho;

    $spiderman -> alteraAtributos('Homem Aranha',75,80,80);
    $batman -> alteraAtributos('Batman',65,70,100);
    $superman -> alteraAtributos('Superman',100,90,75);

    echo $spiderman -> exibirAtributos();
    echo $batman -> exibirAtributos();
    echo $superman -> exibirAtributos();  
?>