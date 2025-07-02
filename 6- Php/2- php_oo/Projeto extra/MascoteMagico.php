<?php

class Dragao extends MascoteMagico {
    private $elemento;

    public function __construct($nome, $idade, $cor, $elemento) {
        parent::__construct($nome, $idade, $cor);
        $this->elemento = $elemento;
    }

    public function getElemento() {
        return $this->elemento;
    }

    public function emitirSom() {
        return "ROOOOAR!";
    }

    public function habilidadeEspecial() {
        return "Sopra fogo de " . $this->elemento;
    }
}

class Unicornio extends MascoteMagico {
    private $chifreMagico;

    public function __construct($nome, $idade, $cor, $chifreMagico) {
        parent::__construct($nome, $idade, $cor);
        $this->chifreMagico = $chifreMagico;
    }

    public function getChifreMagico() {
        return $this->chifreMagico;
    }

    public function emitirSom() {
        return "Piiiiiii!";
    }

    public function habilidadeEspecial() {
        return "Cura com o chifre " . $this->chifreMagico;
    }
}

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