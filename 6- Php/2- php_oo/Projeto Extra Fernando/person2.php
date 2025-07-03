<?php
require_once 'skins.php';

class person2 extends Skins {
    public function __construct() {
        parent::__construct("Martin", 18, "Conjunto Branco, Tenis Preto, Boné Preto", "20s de super pulo");
    }

    protected function falar() {
        return "Vou alcançar as alturas!";
    }
}
