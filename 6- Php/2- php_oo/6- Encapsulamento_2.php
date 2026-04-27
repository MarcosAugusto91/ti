<?php

class Pessoa
{
    private $nome = 'Jorge'; //disponível para o propria classe, nem os próprios filhos podem acessar, nem a aplicação;
    protected $sobrenome = 'Silva'; //disponível para o proprio obj(class) ou filhos, mas não para aplicação;
    public $humor = 'Feliz'; //Disponível para aplicação quanto para outros objetos;

    // 1. Se mantivermos os GET no Pai o filho conseguirá ter acesso a atributos privados do pai, podendo haver alguma validação ou regra de negócio para acessar ou modificar os atributos privados do pai.

    // 2. Se comentarmos todos os GETs do Pai e deixarmos no Filho ele não terá acesso aos atributos privados do pai.

    // 3. Se mantivermos os GETs no Pai e no Filho, o filho obedecerá o GET do filho, e o GET do filho tem acesso apenas aos atributos do filho, ou seja, os atributos privados do pai não estão disponíveis para o filho.

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
        echo '<strong>Imprimindo os Métodos do objeto filho da visão do objeto:</strong><br>';
        echo '<pre>';
        print_r(get_class_methods($this));
        echo '</pre>';
        echo '----------------------------------------------------------------------------<br>';
    }

    private function executarMania()
    {
        echo 'Roer as unhas (Polimorfismo de Sobrescrita)';
    }

    public function x()
    {
        $this->executarMania();
    }

    protected function responder()
    {
        echo 'Olá';
    }

    // 2. Não tendo nenhum tipo de GET ou SET no pai e colocando o GET e SET comum no filho, não é possível acessar os atributos privados! Apenas Protected!
    
    // 3. Porém se tivermos o GET nos dois o objeto filho obedecerá o GET do filho, e o GET do filho tem acesso apenas aos atributos do filho, ou seja, os atributos privados do pai não estão disponíveis para o filho.
    
    /*
    public function getAtributo($attr)
    {
        return $this->$attr;
    }

    public function setAtributo($attr, $value)
    {
        $this->$attr = $value;
    }

    public function __get($atr)
    {
        return $this->$atr;
    }
    public function __set($atr, $value)
    {
        $this->$atr = $value;
    } */
}

//Instanciando Filho
$filho = new Filho();

//exibindo os atributos do objeto
echo '<strong>Imprimindo os Atributos do objeto filho da visão da aplicação:</strong><br>';
echo '<pre>';
print_r($filho);
echo '</pre>';
echo '----------------------------------------------------------------------------<br>';

//exibindo os métodos do objeto que a aplicação tem acesso
echo '<strong>Imprimindo os Métodos do objeto filho da visão da aplicação:</strong><br>';
echo '<pre>';
print_r(get_class_methods($filho));
echo '</pre>';
echo '----------------------------------------------------------------------------<br>';

echo '<strong>Executando um Método Público herdado para executarMania(Privado) do Pai</strong><br>';
echo $filho->executarAcao(); //Método público do pai que consegue trazer métodos privados para o filho;
echo '<br>';
echo '----------------------------------------------------------------------------<br>';
echo '<strong>Executando um Método Público do filho para executarMania(Privado) do Filho</strong><br>';
echo $filho->x(); //Método público do filho que consegue acessar o método privado do filho;

/* 
echo $filho->getAtributo('nome'); //Chamando Get comum do Filho (Se tiver comentado no pai)
echo $filho->__get('nome'); //Chamando Get Mágico do Filho (Se tiver comentado no pai)
*/
?>