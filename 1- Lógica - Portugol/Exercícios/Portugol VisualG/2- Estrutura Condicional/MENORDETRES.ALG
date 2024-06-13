Algoritmo "Menordetres"

Var
      a,b,c: real


Inicio
      escreval("Programa mostra o menor número entre os digitados")
      escreva("Digite o primeiro número: ")
      leia(a)
      escreva("Digite o segundo número: ")
      leia(b)
      escreva("Digite o terceiro número: ")
      leia(c)
      
      se (a < b) e (a < c) entao
         escreva("O menor número foi:", a)
      senao
           se (b < a) e (b < c) entao
              escreva("O menor número foi:", b)
           senao
              escreva("O menor número foi:", c)
           fimse
      fimse
      
Fimalgoritmo