Algoritmo "combust�vel"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 

Var
    opcao: inteiro

Inicio

      escreval("Programa para identifica��o do combust�vel preferido")
      escreval("1-Alcool")
      escreval("2-Gasolina")
      escreval("3-Disel")
      escreva("4-Fim: ")
      leia(opcao)
      
      enquanto (opcao < 1) ou (opcao > 4) faca
               escreva("Op��o Inv�lida! Por favor digite novamente: ")
               leia(opcao)
      fimenquanto
      escreval()
      escreva("Muito Obrigado!")

Fimalgoritmo