Algoritmo "parImpar"

Var

   quantidade,numero,contador: inteiro


Inicio

      escreval("Programa mostra se os n�meros digitados s�o pares ou impares")
      escreva("Digite a quantidade de n�meros que deseja digitar: ")
      leia(quantidade)
      
      para contador de 1 ate quantidade faca
           escreva("Digite um n�mero: ")
           leia(numero)
           
           se numero = 0 entao
              escreval("Nulo")
              escreval()
           senao
           se numero % 2 <> 0 entao
              se numero < 0 entao
                 escreval("Impar - Negativo")
                 escreval()
              senao
                 escreval("Impar - Positivo")
                 escreval()
              fimse
           senao
              se numero < 0 entao
                 escreval("Par - Negativo")
                 escreval()
              senao
                 escreval("Par - Positivo")
                 escreval()
              fimse
           fimse
           fimse
      fimpara

Fimalgoritmo