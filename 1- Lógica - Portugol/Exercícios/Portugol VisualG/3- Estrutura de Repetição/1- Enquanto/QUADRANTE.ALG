Algoritmo "quadrante"

Var
   x,y: inteiro

Inicio

      escreva("Digite X: ")
      leia(x)
      escreva("Digite Y: ")
      leia(y)

      enquanto (x <> 0) e (y <> 0) faca

      se (x > 0) e  (y > 0) entao
         escreval("Quadrante 1!")
      senao
           se (x < 0) e  (y > 0) entao
              escreval("Quadrante 2")
           senao
                se (x < 0) e  (y < 0) entao
                   escreval("Quadrante 3")
                senao
                     se (x > 0) e  (y < 0) entao
                        escreval("Quadrante 4")
                     fimse
                fimse
            fimse
       fimse

       escreval()
       escreva("Digite X: ")
       leia(x)
       escreva("Digite Y: ")
       leia(y)

       
       fimenquanto
       
Fimalgoritmo