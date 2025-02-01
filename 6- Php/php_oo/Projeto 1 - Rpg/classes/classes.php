<?php

    abstract class Classe{
        //Atributos
        public $Forca, $Defesa, $Esquiva, $Velocidade, $Inteligencia, $Vida;

        //Métodos
        public function ataqueComum(){}
        public function defender(){}
        public function esquivar(){}
        public function fugir(){}
    }

    abstract class Raca extends Classe{}

    abstract class Tipo extends Raca{

    }

    //Classes filhas da classe Raça
        class Humano extends Raca{}    
        class Animal extends Raca{}    
        class Anao extends Raca{}
        class Elfo extends Raca{}
        class Mitologica extends Raca{}
        class Android extends Raca{}
        class Dragao extends Raca{}
        class Pirata extends Raca{} 
        class Monstros extends Raca{}

     //Classes filhas da classe Tipo
        class Heroi extends Tipo{} 
        class AntiHeroi extends Tipo{} 
        class Vilao extends Tipo{} 
        class Deus extends Tipo{}
        class SemiDeus extends Tipo{}
        class Normal extends Tipo{}

    //Classes filhas da Classe Classe
        class Guerreiro extends Classe{}
        class Arqueiro extends Classe{}
        class Mago extends Classe{}
        class Barbaro extends Classe{}
        class Monge extends Classe{}
        class Lutador extends Classe{}
        class Ladrão extends Classe{}
        class Ninja extends Classe{}
?>

