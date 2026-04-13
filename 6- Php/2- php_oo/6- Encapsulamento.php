<?php

class Pessoa {
    private $nome = 'Jorge'; //disponível para o propria classe, nem os próprios filhos podem acessar, nem a aplicação;
    protected $sobrenome = 'Silva'; //disponível para o proprio obj(class) ou filhos, mas não para aplicação;
    public $humor = 'Feliz'; //Disponível para aplicação quanto para outros objetos;
	
	/*
		public function getNome()
    {
        //somente com métodos que acesso os atributos private e protected
        return $this->nome;
    }

    public function getSobrenome()
    {
        //somente com métodos que acesso os atributos private e protected
        return $this->sobrenome;
    }

    public function setNome($value)
    {
        $this->nome = $value;
    }

    public function setSobrenome($value)
    {
        if (strlen($value) >= 3) {
            $this->sobrenome = $value;
        }
    }*/

	public function __get($attr)
	{
		return $this->$attr;
	}


	public function __set($attr, $value)
	{
		$this->$attr = $value;
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

		if ($x >= 1 && $x <= 5) {
			$this->responder();
		} else {
			$this->executarMania();
		}
	}
}

$presidente = new Pessoa();
echo $presidente->humor;
echo '<br />';
echo $presidente->executarAcao();

//echo $presidente->nome; 
//echo $presidente->sobrenome;
//echo $presidente->humor;
// echo '<br />';
// echo $presidente->getNome();
// echo '<br />';
// echo $presidente->getSobrenome();
// echo '<br />';
// $presidente->setNome('Jamilton'); 
// $presidente->setSobrenome('Pereira');
// echo $presidente->getNome();
// echo '<br />';
// echo $presidente->getSobrenome();
