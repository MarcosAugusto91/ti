<?php

class Pessoa{
    private $nome = 'Jorge'; //disponível para o propria classe, nem os próprios filhos podem acessar, nem a aplicação;
    protected $sobrenome = 'Silva'; //disponível para o proprio obj(class) ou filhos, mas não para aplicação;
    public $humor = 'Feliz'; //Disponível para aplicação quanto para outros objetos;


    public function __get($atr)
    {
        return $this->$atr;
    }
    public function __set($atr, $value)
    {
        $this->$atr = $value;
    }

    private function executarMania()
    {
        echo 'Assobiar';
    }

    protected function responder()
    {
        echo 'Oi';
    }

    public function executarAcao()
    {
        $x = rand(1, 10);

        if ($x >= 1 && $x <= 8) {
            $this->executarMania();
        } else {
            $this->responder();
        }
    }
}

class Filho extends Pessoa
{

    public function __construct()
    {
        echo '<pre>';
        print_r(get_class_methods($this));
        echo '</pre>';
    }

    private function executarMania()
    {
        echo 'Cantar';
    }

    public function x()
    {
        $this->executarMania();
    }

    protected function responder()
    {
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

echo '<pre>';
//exibir os atributos do objeto
print_r($filho);
echo '</pre>';

echo '</pre>';
//exibir os métodos do objeto
print_r(get_class_methods($filho));
echo '</pre>';

/* echo $filho->getAtributo('nome');
    echo '<br />';
    $filho->setAtributo('nome', 'Pereira');
    echo '<pre>';
    print_r($filho);
    echo '</pre>';
    echo '<br />';
    echo $filho->getAtributo('nome'); */

/*  echo $filho->__get('nome');

    $filho->__set('nome', 'Jamilton');
    echo '<br />';
    echo $filho->__get('nome');

    echo '<pre>';
    print_r($filho);
    echo '</pre>'; */

//echo '<br/>';
//$filho->executarMania();
echo '<br/>';
echo '<br/>';
$filho->x();

?>