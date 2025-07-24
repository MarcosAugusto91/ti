<?php
abstract class Skins {
    protected $nome;
    protected $idade;
    protected $roupa;
    protected $habilidade;

    public function __construct($nome, $idade, $roupa, $habilidade) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->roupa = $roupa;
        $this->habilidade = $habilidade;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getIdade() {
        return $this->idade;
    }

    public function getRoupa() {
        return $this->roupa;
    }

    public function getHabilidade() {
        return $this->habilidade;
    }

    // Método que deve ser sobrescrito nas subclasses
    protected function falar() {
        return "Pronto para o jogo!";
    }

    public function apresentar() {
        return "Nome: {$this->nome}<br>" .
               "Idade: {$this->idade}<br>" .
               "Roupa: {$this->roupa}<br>" .
               "Habilidade: {$this->habilidade}<br>" .
               "Fala: {$this->falar()}";
    }
}
