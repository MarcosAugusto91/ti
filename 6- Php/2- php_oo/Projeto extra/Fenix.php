<?php

class Fenix extends MascoteMagico {
    private $renascimentos;

    public function __construct($nome, $idade, $cor, $renascimentos) {
        parent::__construct($nome, $idade, $cor);
        $this->renascimentos = $renascimentos;
    }

    public function getRenascimentos() {
        return $this->renascimentos;
    }

    public function emitirSom() {
        return "Kreeeeee!";
    }

    public function habilidadeEspecial() {
        return "Renasce das cinzas (" . $this->renascimentos . " vezes)";
    }
}

?>