<?php 

    if(isset($_GET['monstro'])){
        $monstro = $_GET['monstro'];
    } else {
        $monstro = null;
    }

    function dracula($monstro){
        echo $monstro;
        echo "<br>";
        echo "<br>";
        echo "Drácula é um personagem fictício criado pelo escritor irlandês Bram Stoker. Ele é um vampiro que se alimenta do sangue de suas vítimas para manter sua imortalidade. Drácula é conhecido por sua aparência assustadora, com pele pálida, dentes afiados e uma capa preta. Ele é um dos vilões mais famosos da literatura e já foi adaptado para diversos filmes, séries e outras mídias ao longo dos anos.";
        echo "<br>";
    };    
    
    function chucky($monstro){
        echo $monstro;
        echo "<br>";
        echo "<br>";
        echo "Chucky é um personagem fictício da série de filmes de terror 'Child's Play'. Ele é um boneco possuído pelo espírito de um serial killer chamado Charles Lee Ray. Chucky é conhecido por sua aparência assustadora, com cabelos ruivos, roupas coloridas e uma expressão maliciosa. Ele é um dos vilões mais icônicos do gênero de terror e já apareceu em vários filmes, séries de televisão e outras mídias ao longo dos anos.";
        echo "<br>";
    };    
    
    function it($monstro){
        echo $monstro;
        echo "<br>";
        echo "<br>";
        echo "It é um personagem fictício criado pelo escritor Stephen King. Ele é um ser maligno que se alimenta do medo das pessoas, assumindo a forma de um palhaço chamado Pennywise. It é conhecido por sua aparência assustadora, com roupas coloridas, maquiagem de palhaço e um sorriso sinistro. Ele é o principal antagonista do livro 'It' e já foi adaptado para diversos filmes e séries de televisão ao longo dos anos.";
        echo "<br>";
    };    
    
    function mumia($monstro){
        echo $monstro;
        echo "<br>";
        echo "<br>";
        echo "A múmia é um personagem fictício que tem suas raízes na mitologia egípcia. Ela é geralmente retratada como um cadáver embalsamado e envolto em faixas de linho. A múmia é conhecida por sua aparência assustadora, com olhos vazios e uma expressão sinistra. Ela é frequentemente associada a maldições e histórias de terror, e já foi adaptada para diversos filmes, séries de televisão e outras mídias ao longo dos anos.";
        echo "<br>";
    };    
    
    function frankstein($monstro){
        echo $monstro;
        echo "<br>";
        echo "<br>";
        echo "Frankenstein é um personagem fictício criado pela escritora Mary Shelley. Ele é um cientista que cria um ser humano a partir de partes de cadáveres. O monstro de Frankenstein é conhecido por sua aparência assustadora, com pele verde, cicatrizes e parafusos no pescoço. Ele é um dos personagens mais icônicos da literatura gótica e já foi adaptado para diversos filmes, séries de televisão e outras mídias ao longo dos anos.";
        echo "<br>";
    };
 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selecione o Monstro</title>
    <link rel="stylesheet" href="10.2.css">
</head>
<body>

    <form action="10.2- function - exercicio.php" method="GET">
        <div class="container">
            <div class="monstro">
                <select name="monstro" id="">
                    <option value="">Selecione</option>
                    <option value="dracula">Drácula</option>
                    <option value="chucky">Chucky</option>
                    <option value="it">It</option>
                    <option value="mumia">Múmia</option>
                    <option value="frankstein">Frankstein</option>
                </select>
                <button class="botao" type="submit">Pronto!</button>
                <div class="resposta">                
                    <?php 
                    
                    if($monstro != null){
                        isset($monstro) ? $monstro($monstro) : dracula("Selecione um monstro");
                    }
                    ?>
                    <?php if($monstro == null)  {
                        echo "";
                    } else
                    echo "<img src= {$monstro}.jpg "?>
                </div>

            </div>
        </div>

        <audio autoplay loop>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg">
        </audio>    
    </form>
    
</body>
</html>