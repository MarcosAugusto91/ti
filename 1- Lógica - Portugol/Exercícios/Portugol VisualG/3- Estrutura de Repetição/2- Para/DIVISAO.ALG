Algoritmo "divisao"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 

Var
     quantidade, contador: inteiro
     numerador, denominador, resultado: real


Inicio

      escreval("Programa calcula divis�o ou verifica se divis�o n�o � poss�vel")
      escreva("Digite quantas vezes deseja calcular: ")
      leia(quantidade)

      escreva("Digite o numerador: ")
      leia(numerador)
      
      escreva("Digite o denominador: ")
      leia(denominador)
      

      para contador de 1 ate quantidade-1 faca
           
                    se denominador = 0 entao
                       escreva("Divis�o Imposs�vel")
                       escreval()
                       escreval()
                       
                       escreva("Digite o numerador: ")
                       leia(numerador)
                       escreva("Digite o denominador: ")
                       leia(denominador)
                     senao
                       resultado <- numerador / denominador
                       escreva("Divis�o: ",resultado)
                       escreval()
                       escreval()

                       escreva("Digite o numerador: ")
                       leia(numerador)
                       escreva("Digite o denominador: ")
                       leia(denominador)
                    fimse
      fimpara

Fimalgoritmo