<?php 

    //MODELO
    Class Times{

        //ATRIBUTOS
        public $nome;
        public $titulos;

        //MÉTODOS
        function __set($atributo, $valor)
        {
            $this->$atributo = $valor;
        }

        function __get($atributo){
            return $this->$atributo;
        }

        function escrever(){
            return $this->__get('nome') . " possui " . $this->__get("titulos") . " títulos mundiais! <br/><hr>";
        }
    }
    
    //Instanciando os objetos
    $saoPaulo = new Times;
    $santos = new Times;
    $corinthians = new Times;
    $palmeiras = new Times;

    $saoPaulo->__set("nome","São Paulo");
    $saoPaulo->__set("titulos","3");
    
    $santos->__set("nome","Santos");
    $santos->__set("titulos","2");
    
    $corinthians->__set("nome","Corinthians");
    $corinthians->__set("titulos","1");
    
    $palmeiras->__set("nome","Palmeiras");
    $palmeiras->__set("titulos","0");

    echo $saoPaulo->escrever();
    echo $santos->escrever();
    echo $corinthians->escrever();
    echo $palmeiras->escrever();

?>