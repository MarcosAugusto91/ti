Algoritmo "combustível"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

Var
    opcao: inteiro

Inicio

      escreval("Programa para identificação do combustível preferido")
      escreval("1-Alcool")
      escreval("2-Gasolina")
      escreval("3-Disel")
      escreva("4-Fim: ")
      leia(opcao)
      
      enquanto (opcao < 1) ou (opcao > 4) faca
               escreva("Opção Inválida! Por favor digite novamente: ")
               leia(opcao)
      fimenquanto
      escreval()
      escreva("Muito Obrigado!")

Fimalgoritmo