<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="dados.php" method="GET">
        <label for="nome">Nome:</label>     
        <input name="nome" type="text" placeholder="ex: Marcos"></input>

        <label for="peso">Peso:</label>     
        <input name="peso" type="number" placeholder="ex: 69.5" step="0.01"></input>

        <label for="altura">Altura:</label> 
        <input name="altura" type="number" placeholder="ex: 1.78" step="0.01"></input>
        <button type="submit">Calcular</button>
    </form>

</body>
</html>