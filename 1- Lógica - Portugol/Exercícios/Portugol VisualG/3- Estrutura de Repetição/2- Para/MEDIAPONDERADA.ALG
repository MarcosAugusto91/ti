Algoritmo "mediaPonderada"


Var
   Quantidade, cont: inteiro
   N1, N2, N3, P1, P2, P3, media: real


Inicio

      P1 <- 2
      P2 <- 3
      P3 <- 5

      escreval("Programa cálcula a média ponderada de quantas vezes desejar")
      escreva("Digite a quantidade de vezes que deseja utilizar: ")
      leia(Quantidade)
      
      para cont de 1 ate Quantidade faca
           escreva("Digite N1: ")
           leia(N1)
           escreva("Digite N2: ")
           leia(N2)
           escreva("Digite N3: ")
           leia(N3)
           N1 <- N1 * P1
           N2 <- N2 * P2
           N3 <- N3 * P3
           media <- (N1 + N2 + N3) / (P1 + P2 + P3)
           escreva("Média Ponderada: ",media)
           escreval()
      fimpara

Fimalgoritmo