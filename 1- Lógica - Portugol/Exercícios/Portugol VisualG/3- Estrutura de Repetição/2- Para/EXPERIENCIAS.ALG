Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 02/08/2024
Var
// Seção de Declarações das variáveis 
   testes, qtdcobaias, totcobaias, C, R, S, cont: inteiro
   tip: caractere
   pC, pR, pS: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Quantos testes foram realizados? ")
   leia(testes)
   escreval

   para cont de 1 ate testes faca
      escreva("Quantidade de cobaias: ")
      leia(qtdcobaias)
      escreva("Tipo de cobaia: ")
      leia (tip)

      se (tip = "C") ou (tip = "c") entao
         C <- C + qtdcobaias
         totcobaias <- totcobaias + qtdcobaias
         escreval
      senao
           se (tip = "R") ou (tip = "r") entao
              R <- R + qtdcobaias
              totcobaias <- totcobaias + qtdcobaias
              escreval
           senao
              se (tip = "S") ou (tip = "s") entao
                 S <- S + qtdcobaias
                 totcobaias <- totcobaias + qtdcobaias
                 escreval
              senao
                   escreval("Valor não corresponde as cobaias cadastradas C,R,S!")
                   cont <- (cont -1)
                   escreval
              fimse
           fimse
      fimse
   fimpara
   
   pC <- (C * 100) / totcobaias
   pR <- (R * 100) / totcobaias
   pS <- (S * 100) / totcobaias
   
   escreval("Relatório Final")
   escreval("Total:  ", totcobaias)
   escreval("Coelhos:", C, " Percentual: ", pC, "%")
   escreval("Ratos:  ", R  , " Percentual: ", pR, "%")
   escreval("Sapos:  ", S  , " Percentual: ", pS, "%")


Fimalgoritmo