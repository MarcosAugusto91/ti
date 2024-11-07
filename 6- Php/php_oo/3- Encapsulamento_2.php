<?php

class Pai {
    private $nome = 'Jorge'; //disponível para o proprio obj(class)
    protected $sobrenome = 'Silva'; //disponível para o proprio obj(class)
    public $humor = 'Feliz';


    // public function getNome(){
    //     //somente com métodos que acesso os atributos private e protected
    //     return $this->nome;
    // }
    // public function getSobrenome()
    // {
    //     //somente com métodos que acesso os atributos private e protected
    //     return $this->sobrenome;
    // }

    // public function setNome($value)
    // {
    //     $this->nome = $value;
    // }

    // public function setSobrenome($value)
    // {
    //     if (strlen($value) >= 3) {
    //         $this->sobrenome = $value;
    //     }
    // }

    public function __get($atr) {
        return $this->$atr;
    }
    public function __set($atr, $value) {
       $this->$atr = $value;
    }

    private function executarMania() {
        echo 'Assobiar';
    }

    protected function responder() {
        echo 'Oi';
    }

    public function executarAcao() {
        $x = rand(1, 10);

        if ($x >= 1 && $x <= 8) {
            $this->executarMania();
        } else {
            $this->responder();
        }
    }
}
    class Filho extends Pai {

        public function __construct() {
            echo '<pre>';
            print_r(get_class_methods($this));
            echo '</pre>';
        }

        private function executarMania() {
            echo 'Cantar';
        }

        public function x() {
            $this->executarMania();
        }

        protected function responder() {
            echo 'Olá';
        }
    

      /*   public function getAtributo ($attr) {
            return $this->$attr;
        }

        public function setAtributo ($attr, $value) {
            $this->$attr = $value;
        } */

       /*  public function __get($atr) {
            return $this->$atr;
        }
        public function __set($atr, $value) {
           $this->$atr = $value;
        } */
    
    }

$filho = new Filho();
//$pai = new Pai();


    echo '<pre>';
    print_r($filho);
    echo '</pre>';

    /* echo $filho->getAtributo('nome');
    echo '<br />';
    $filho->setAtributo('nome', 'Pereira');
    echo '<pre>';
    print_r($filho);
    echo '</pre>';
    echo '<br />';
    echo $filho->getAtributo('nome'); */

    //exibir os métodos do objeto
    // echo '<pre>';
    // print_r(get_class_methods($filho));
    // echo '</pre>';

   /*  echo $filho->__get('nome');

    $filho->__set('nome', 'Jamilton');
    echo '<br />';
    echo $filho->__get('nome');

    echo '<pre>';
    print_r($filho);
    echo '</pre>'; */

    $fiho->executarMania();
    echo '<br/>';
    $filho->x();