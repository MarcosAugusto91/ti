<?php

    abstract class Classe{
        //Atributos
        public $forca, $defesa, $esquiva, $velocidade, $inteligencia, $vida, $raca, $tipo, $classe, $img, $descricao;

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
        public $descricao = 'Um combatente robusto, especializado em armaduras pesadas e armas de combate corpo a corpo.';

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
        public $descricao = 'Um mestre do arco e flecha, ágil e preciso, que ataca de longe com destreza.';

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
        public $descricao = 'Um conjurador de feitiços poderosos, capaz de manipular os elementos e invocar magia arcana.';
        
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
        public $descricao = 'Um guerreiro feroz, movido pela fúria, que utiliza força bruta e instintos primitivos em batalha.';


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
        public $descricao = 'Um lutador ágil e espiritual, que combina artes marciais com habilidades místicas e meditação.';
        
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
        public $descricao = 'Um especialista em combate corpo a corpo, que utiliza técnicas de luta e agilidade para derrotar inimigos.';

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
        public $descricao = 'Um mestre da furtividade e do roubo, ágil e astuto, que se infiltra em lugares sem ser notado.';

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
        public $descricao = 'Um guerreiro furtivo e letal, treinado em técnicas de assassinato e habilidades de camuflagem.';

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
        public $descricao = 'Um contador de histórias e músico, que usa canções e encantamentos para inspirar aliados e confundir inimigos.';

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
        public $descricao = 'Um aventureiro audacioso dos mares, que busca tesouros e vive pela liberdade, sempre pronto para a batalha.';

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
        public $descricao = 'Um ser artificial com habilidades avançadas, que combina tecnologia e combate em um corpo humanoide.';

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
        public $descricao = 'Uma criatura colossal e forte, conhecida por sua brutalidade e resistência em combate.';

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
        public $descricao = 'Um companheiro leal ou um feroz predador, que pode ter habilidades especiais dependendo da espécie.';

        public function ataqueEspecial(){
            echo 'Mordida raivosa (70)<br>';
            echo 'Barulho vibrante (50)';
        }
    }    
    
    class Fantasma extends Classe{
        public $forca = 30; 
        public $defesa = 60; 
        public $esquiva = 100;
        public $velocidade = 100;
        public $inteligencia = 30;
        public $vida = 130;
        public $img = 'fantasma';
        public $descricao = 'Uma entidade etérea, que pode atravessar paredes e assombrar os vivos com sua presença sobrenatural.';

        public function ataqueEspecial(){
            echo 'Vulto sombrio (70)<br>';
            echo 'Garra da morte (50)';
        }
    }    
    
    class Dinossauro extends Classe{
        public $forca = 130; 
        public $defesa = 70; 
        public $esquiva = 50;
        public $velocidade = 70;
        public $inteligencia = 30;
        public $vida = 100;
        public $img = 'dinossauro';
        public $descricao = 'Uma criatura pré-histórica poderosa, que traz força bruta e habilidades únicas para o campo de batalha.';

        public function ataqueEspecial(){
            echo 'Engolir (70)<br>';
            echo 'Investida (50)';
        }
    }    

    class Soldado extends Classe{
        public $forca = 70; 
        public $defesa = 60; 
        public $esquiva = 90;
        public $velocidade = 90;
        public $inteligencia = 40;
        public $vida = 100;
        public $img = 'soldado';
        public $descricao = 'Um combatente disciplinado e treinado, que segue ordens e luta em formação para proteger seu reino.';

        public function ataqueEspecial(){
            echo 'Bala venenosa (70)<br>';
            echo 'Granada explosiva (50)';
        }
    }    
    
    class Vampiro extends Classe{
        public $forca = 80; 
        public $defesa = 50; 
        public $esquiva = 90;
        public $velocidade = 90;
        public $inteligencia = 50;
        public $vida = 90;
        public $img = 'vampiro';
        public $descricao = 'Uma majestosa criatura alada, capaz de cuspir fogo e com uma sabedoria ancestral, guardiã de tesouros.';

        public function ataqueEspecial(){
            echo 'Sangue suga (70)<br>';
            echo 'Dentes afiados (50)';
        }
    }    
    
    class Anao extends Classe{
        public $forca = 80; 
        public $defesa = 70; 
        public $esquiva = 40;
        public $velocidade = 40;
        public $inteligencia = 100;
        public $vida = 120;
        public $img = 'anao';
        public $descricao = 'Um guerreiro robusto e resistente, conhecido por sua habilidade em forjar armas e sua bravura em combate.';

        public function ataqueEspecial(){
            echo 'Golpe baixo (70)<br>';
            echo 'Rasteira (50)';
        }
    }   
    
    class Dragao extends Classe{
        public $forca = 90; 
        public $defesa = 60; 
        public $esquiva = 40;
        public $velocidade = 70;
        public $inteligencia = 40;
        public $vida = 150;
        public $img = 'dragao';
        public $descricao = 'Uma majestosa criatura alada, poderosa e sábia, capaz de cuspir fogo e guardiã de tesouros inestimáveis.';

        public function ataqueEspecial(){
            echo 'Lança chamas (50)<br>';
            echo 'Fúria da noite (70)';
        }
    }   
    
    class Elfo extends Classe{
        public $forca = 60; 
        public $defesa = 70; 
        public $esquiva = 65;
        public $velocidade = 70;
        public $inteligencia = 90;
        public $vida = 95;
        public $img = 'elfo';
        public $descricao = 'Um ser ágil e elegante, com habilidades mágicas e uma conexão profunda com a natureza.';

        public function ataqueEspecial(){
            echo 'Flecha celestial (50)<br>';
            echo 'Chama da natureza (70)';
        }
    }    
       
    class Frankstein extends Classe{
        public $forca = 60; 
        public $defesa = 70; 
        public $esquiva = 65;
        public $velocidade = 70;
        public $inteligencia = 90;
        public $vida = 95;
        public $img = 'frankstein';
        public $descricao = 'Uma criatura feita de partes de diferentes corpos, que busca aceitação e luta contra seu destino.';

        public function ataqueEspecial(){
            echo 'Cabeçada (50)<br>';
            echo 'Braço de Pedra (70)';
        }
    }   
    
    class Saci extends Classe{
        public $forca = 60; 
        public $defesa = 70; 
        public $esquiva = 65;
        public $velocidade = 70;
        public $inteligencia = 90;
        public $vida = 95;
        public $img = 'saci';
        public $descricao = 'Um travesso espírito folclórico, que usa truques e astúcia para confundir e enganar seus adversários.';

        public function ataqueEspecial(){
            echo 'Furacão (70)<br>';
            echo 'Vento da mata (50)';
        }
    }    
    
    class Zumbi extends Classe{
        public $forca = 90; 
        public $defesa = 90; 
        public $esquiva = 30;
        public $velocidade = 30;
        public $inteligencia = 00;
        public $vida = 240;
        public $img = 'zumbi';
        public $descricao = 'Um morto-vivo reanimado, que se move lentamente, mas é implacável em sua busca por carne fresca.';

        public function ataqueEspecial(){
            echo 'Come cérebro (50)<br>';
            echo 'Gosma ácida (70)';
        }
    }    
    
    class Lobisomem extends Classe{
        public $forca = 90; 
        public $defesa = 50; 
        public $esquiva = 80;
        public $velocidade = 80;
        public $inteligencia = 50;
        public $vida = 100;
        public $img = 'lobisomem';
        public $descricao = 'Um humano amaldiçoado que se transforma em uma fera à noite, combinando força animal com inteligência humana.';

        public function ataqueEspecial(){
            echo 'Garra feroz (50)<br>';
            echo 'Uivo da morte (70)';
        }
    }
?>

