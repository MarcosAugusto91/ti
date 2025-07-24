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


?>