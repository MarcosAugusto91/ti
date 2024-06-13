Algoritmo "divisao"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

Var
     quantidade, contador: inteiro
     numerador, denominador, resultado: real


Inicio

      escreval("Programa calcula divisão ou verifica se divisão não é possível")
      escreva("Digite quantas vezes deseja calcular: ")
      leia(quantidade)

      escreva("Digite o numerador: ")
      leia(numerador)
      
      escreva("Digite o denominador: ")
      leia(denominador)
      

      para contador de 1 ate quantidade-1 faca
           
                    se denominador = 0 entao
                       escreva("Divisão Impossível")
                       escreval()
                       escreval()
                       
                       escreva("Digite o numerador: ")
                       leia(numerador)
                       escreva("Digite o denominador: ")
                       leia(denominador)
                     senao
                       resultado <- numerador / denominador
                       escreva("Divisão: ",resultado)
                       escreval()
                       escreval()

                       escreva("Digite o numerador: ")
                       leia(numerador)
                       escreva("Digite o denominador: ")
                       leia(denominador)
                    fimse
      fimpara

Fimalgoritmo