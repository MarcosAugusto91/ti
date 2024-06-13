Algoritmo "Retangulo"

Var
    B, A, P, D : real

Inicio

      escreval("Bem vindo te auxiliaremos com o cálculo do Perímetro e Diagonal")

      escreva("Digite a medida da base do Retangulo: ")
      leia(B)
      
      escreva("Digite a medida da altura do Retangulo: ")
      leia(A)

      P <- (2*(B+A))
      D <- RaizQ((B*B)+(A*A))
      
      escreval()
      escreval("Perímetro do Retangulo: ",P:6:4)
      escreval("Diagonal do Retangulo: ",D:6:4)
      
      

Fimalgoritmo