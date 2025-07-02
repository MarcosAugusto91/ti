<?php

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

?>