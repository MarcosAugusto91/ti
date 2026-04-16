<?php

// 1. Utilidade e Funções Auxiliares (Helper Classes)
// O uso mais comum é para classes que executam tarefas genéricas que não dependem de dados específicos de um objeto. Se a função faz apenas um cálculo ou formatação, não há necessidade de ocupar memória criando um objeto.

class Calculadora
{
    public static function somar($a, $b)
    {
        return $a + $b;
    }
}

// Acesso direto via operador de resolução de escopo (::)
echo Calculadora::somar(10, 5);

//-------------------------------------------------------------------

// 2. Compartilhamento de Dados entre Instâncias
// Atributos estáticos mantêm seu valor durante toda a execução do script. Se você tiver 10 objetos de uma classe, todos eles compartilharão a mesma variável estática.
// Exemplo: Um contador de quantos usuários estão conectados ou quantas vezes uma classe foi instanciada.

//-------------------------------------------------------------------

// 3. Padrões de Projeto (Design Patterns)
// Muitos padrões de projeto dependem de métodos estáticos. O mais famoso é o Singleton, usado quando você quer garantir que uma classe tenha apenas uma única instância em todo o projeto (como uma conexão com o banco de dados).

//-------------------------------------------------------------------
?>
