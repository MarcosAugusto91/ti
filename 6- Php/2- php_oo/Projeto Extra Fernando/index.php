<?php
require_once 'skins.php';
require_once 'person1.php';
require_once 'person2.php';
require_once 'person3.php';

$Skins = [
    new person1(),
    new person2(),
    new person3(),
];
?>

<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title> Bla Bla Bla </title>
</head> 
<body>

    <h1> Rooftops Person </h1>

    <!-- Card 1: person1 -->
    <div class="card">
        <?php echo $Skins[0]->apresentar(); ?> 
    </div>

    <!-- Card 2: person2 -->
    <div class="card">
        <?php echo $Skins[1]->apresentar(); ?> 
    </div>

    <!-- Card 3: person3 -->
    <div class="card">
        <?php echo $Skins[2]->apresentar(); ?> 
    </div>

</body>
</html>
