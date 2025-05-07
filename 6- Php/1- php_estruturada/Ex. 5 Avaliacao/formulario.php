<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Formulário de Pesquisa</title>
</head>
<body>
    <h2>Pesquisa de Opinião - Novo Produto</h2>
    <form action="resultado.php" method="post">
        <?php for ($i = 0; $i < 10; $i++): ?>
            <fieldset>
                <legend>Pessoa <?= $i + 1 ?></legend>
                Sexo:
                <select name="sexo[]">
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select><br><br>
                Resposta:
                <select name="resposta[]">
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
            </fieldset>
            <br>
        <?php endfor; ?>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
