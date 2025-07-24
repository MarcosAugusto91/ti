<?php
require_once 'skins.php';

class person3 extends Skins {
    public function __construct() {
        parent::__construct("Pogba", 22, "Conjunto Vermelho, Tenis Preto, Boné Branco", "10s correndo na parede");
    }

    protected function falar() {
        return "Nada me para nas paredes!";
    }
}
