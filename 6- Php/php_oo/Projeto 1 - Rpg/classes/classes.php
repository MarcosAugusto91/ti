<?php

    abstract class Classe{
        //Atributos
        public $forca, $defesa, $esquiva, $velocidade, $inteligencia, $vida, $tipo, $classe, $img;

        //Métodos
        public function ataqueComum(){echo('Ataque Comum (20) <br>');}
        public function defender(){echo('Defender (50) <br>');}
        public function esquivar(){echo('Esquivar (60) <br>');}
        public function fugir(){echo('Fugir (-10) <br>');}
        
        public function __set($atributo,$valor){
            $this->$atributo = $valor;
        }

        public function __get($atributo){
            return $this -> $atributo;
        }
    }

    //Classes filhas da Classe Classe
    class Guerreiro extends Classe{
        public $forca = 100; 
        public $defesa = 75; 
        public $esquiva = 75;
        public $velocidade = 75;
        public $inteligencia = 30;
        public $vida = 85;
        public $img = 'guerreiro';

        public function ataqueEspecial(){
            echo 'Espada Flamejante (70) <br>';
            echo 'Corte profundo (50)';
        }
    }
    class Arqueiro extends Classe{
        public $forca = 60; 
        public $defesa = 70; 
        public $esquiva = 90;
        public $velocidade = 90;
        public $inteligencia = 70;
        public $vida = 70;
        public $img = 'arqueiro';

        public function ataqueEspecial(){
            echo 'Flecha de gelo (70) <br>';
            echo 'Alvo perfurante (50)';
        }
    }
    class Mago extends Classe{
        public $forca = 20; 
        public $defesa = 70; 
        public $esquiva = 60;
        public $velocidade = 70;
        public $inteligencia = 100;
        public $vida = 130;
        public $img = 'mago';

        public function ataqueEspecial(){
            echo 'Fúria do Dragão (70)<br>';
            echo 'Energia estelar (50)';
        }
    }
    class Barbaro extends Classe{
        public $forca = 130; 
        public $defesa = 80; 
        public $esquiva = 45;
        public $velocidade = 45;
        public $inteligencia = 50;
        public $vida = 100;
        public $img = 'barbaro';

        public function ataqueEspecial(){
            echo 'Força Sobrenatural (70)<br>';
            echo 'Golpe esmagador (50)';
        }
    }
    class Monge extends Classe{
        public $forca = 50; 
        public $defesa = 70; 
        public $esquiva = 70;
        public $velocidade = 70;
        public $inteligencia = 105;
        public $vida = 80;
        public $img = 'monge';
        
        public function ataqueEspecial(){
            echo 'Silêncio Profundo (50)<br>';
            echo 'Energia solar (70)';
        }
    }
    class Lutador extends Classe{
        public $forca = 90; 
        public $defesa = 65; 
        public $esquiva = 80;
        public $velocidade = 80;
        public $inteligencia = 35;
        public $vida = 100;
        public $img = 'lutador';

        public function ataqueEspecial(){
            echo 'Soco giratório (60)<br>';
            echo 'Chute voador (60)';
        }
    }
    class Ladrao extends Classe{
        public $forca = 20; 
        public $defesa = 50; 
        public $esquiva = 100;
        public $velocidade = 85;
        public $inteligencia = 100;
        public $vida = 95;
        public $img = 'ladrao';

        public function ataqueEspecial(){
            echo 'Contragolpe rápido (70)<br>';
            echo 'Furtividade (50)';
        }
    }
    class Ninja extends Classe{
        public $forca = 40; 
        public $defesa = 45; 
        public $esquiva = 100;
        public $velocidade = 100;
        public $inteligencia = 90;
        public $vida = 75;
        public $img = 'ninja';

        public function ataqueEspecial(){
            echo 'Ataque rápido (50)<br>';
            echo 'Lâmina ardente (70)';
        }
    }    
    class Bardo extends Classe{
        public $forca = 20; 
        public $defesa = 30; 
        public $esquiva = 80;
        public $velocidade = 80;
        public $inteligencia = 120;
        public $vida = 120;
        public $img = 'bardo';

        public function ataqueEspecial(){
            echo 'Som profundo (50)<br>';
            echo 'Nota perfurante (70)';
        }
    }
    class Pirata extends Classe{
        public $forca = 80; 
        public $defesa = 40; 
        public $esquiva = 80;
        public $velocidade = 70;
        public $inteligencia = 70;
        public $vida = 110;
        public $img = 'pirata';

        public function ataqueEspecial(){
            echo 'Lâmina cortante (50)<br>';
            echo 'Maldição do esqueleto (70)';
        }
    }    
    class Android extends Classe{
        public $forca = 100; 
        public $defesa = 80; 
        public $esquiva = 50;
        public $velocidade = 50;
        public $inteligencia = 80;
        public $vida = 90;
        public $img = 'android';

        public function ataqueEspecial(){
            echo 'Laser de fogo (60)<br>';
            echo 'Chuva de tiros (60)';
        }
    }    
    class Ogro extends Classe{
        public $forca = 120; 
        public $defesa = 90; 
        public $esquiva = 30;
        public $velocidade = 30;
        public $inteligencia = 30;
        public $vida = 150;
        public $img = 'ogro';

        public function ataqueEspecial(){
            echo 'Ataque de fúria (70)<br>';
            echo 'Desmembramento (50)';
        }
    }    
    class Animal extends Classe{
        public $forca = 80; 
        public $defesa = 60; 
        public $esquiva = 90;
        public $velocidade = 90;
        public $inteligencia = 30;
        public $vida = 100;
        public $img = 'animal';

        public function ataqueEspecial(){
            echo 'Mordida raivosa (70)<br>';
            echo 'Barulho vibrante (50)';
        }
    }
?>

