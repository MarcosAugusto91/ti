Algoritmo "Menordetres"

Var
      a,b,c: real


Inicio
      escreval("Programa mostra o menor n�mero entre os digitados")
      escreva("Digite o primeiro n�mero: ")
      leia(a)
      escreva("Digite o segundo n�mero: ")
      leia(b)
      escreva("Digite o terceiro n�mero: ")
      leia(c)
      
      se (a < b) e (a < c) entao
         escreva("O menor n�mero foi:", a)
      senao
           se (b < a) e (b < c) entao
              escreva("O menor n�mero foi:", b)
           senao
              escreva("O menor n�mero foi:", c)
           fimse
      fimse
      
Fimalgoritmo