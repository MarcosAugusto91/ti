<?php
require_once 'skins.php';

class person1 extends Skins {
    public function __construct() {
        parent::__construct("Jefrey", 24, "Conjunto Preto, Tenis Branco, Boné Preto", "12s de super velocidade");
    }

    protected function falar() {
        return "Vamos correr!";
    }
}
