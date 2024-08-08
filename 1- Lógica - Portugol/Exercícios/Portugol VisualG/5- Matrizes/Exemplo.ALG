Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/08/2024
Var
// Seção de Declarações das variáveis 
   mat: vetor[0..4, 0..4] de inteiro
   L,C,i,j:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreva("Quantas linhas vai ter a matriz: ")
   leia(L)
   escreva("Quantas linhas vai ter a coluna: ")
   leia(C)
   
   para i de 0 ate L-1 faca
        para j de 0 ate C-1 faca
             escreva("Elemento[",i, ",", j, "]: ")
             leia(mat[i,j])
        fimpara
   fimpara
   
   escreval
   escreval("Matriz Digitada:")
   para i de 0 ate L-1 faca
        para j de 0 ate C-1 faca
             escreva(mat[i,j])
        fimpara
        escreval
   fimpara

Fimalgoritmo