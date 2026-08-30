<?php
//PTI: Marcos Augusto de Azevedo

// 1) Declaração de variáveis e atribuição direta
//*Poderíamos ao invés de atribuir diretamente, receber os valores via formulário HTML pelos Inputs usando os métodos GET ou POST.

$nomeAluno = "Marcos";
$notaAluno = 8.5; // Aqui podemos alterar a nota para testar outros cenários (ex: 6.0 ou 4.5)

// 2) Lógica do Programa com estrutura condicional (if/else)
if ($notaAluno >= 7.0) {
    $situacao = "Aprovado";
} elseif ($notaAluno >= 5.0 && $notaAluno < 7.0) {
    $situacao = "Recuperação";
} else {
    $situacao = "Reprovado";
}

// 3) Saída de Dados
echo "Aluno: " . $nomeAluno . ", nota: " . $notaAluno . ", situação: " . $situacao;
?>