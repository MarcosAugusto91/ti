Algoritmo "Baskara"

Var
   a,b,c,delta,xa,xb: real


Inicio

      escreval("Programa faz cálculo da fórmula de Baskara")
      escreva("Digite valor do coeficiente A: ")
      leia(a)
      
      escreva("Digite valor do coeficiente B: ")
      leia(b)
      
      escreva("Digite valor do coeficiente C: ")
      leia(c)
      
      se (b*b) > (4*a*c) entao
         delta <- (b*b)-(4*a*c)
         xa <- ((-b) + RaizQ(delta)) / (2*a)
         xb <- ((-b) - RaizQ(delta)) / (2*a)
         escreva("X1:",xa:6:4,", X2:",xb:6:4)
      senao
           escreva("Esta equação não possui raizes reais, Delta Negativo")
      fimse

Fimalgoritmo