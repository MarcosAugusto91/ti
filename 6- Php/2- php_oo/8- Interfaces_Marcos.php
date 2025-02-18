<?php

    interface EquipamentoEletrônicoInterface{
        //Todos os métodos de uma interface devem se públicos para que consigam ser utilizadas nas suas respectivas classes;
        public function ligar();
        public function desligar();

    }
    
    class Geladeira implements EquipamentoEletrônicoInterface{
        public function abrirPorta(){
            echo "Abrir porta <br/>";
        }

        public function ligar(){
        echo "Ligar dispositivo <br/>";
        }

        public function desligar(){
        echo "Desligar dispositivo <br/>";
        }

    }


    class Tv /*implements EquipamentoEletrônicoInterface se descomentarmos este trecho: erro pois métodos obrigatórios não foram colocados*/{
        public function trocarCanal(){
            echo "Trocar canal <br/>";
        }
    }

    $geladeira1 = new Geladeira();
    $tv1 = new Tv();

    echo $geladeira1 -> ligar(); //método vindo da interface
    echo $geladeira1 -> abrirPorta(); //método da própria classe
    echo $geladeira1 -> desligar(); //método vindo da interface

?>