Algoritmo "coordenadas"

Var

  x, y : real
  eixo: caractere
  
Inicio

      escreval("Programa verifica plano cartesiano e identifica Quadrante")
      escreva("Digite posição de X: ")
      leia(x)
      escreva("Digite posição de Y: ")
      leia(y)
      
      se (x > 0) e (y > 0) entao
         eixo <- "Q1"
      senao
         se (x > 0) e (y < 0) entao
            eixo <- "Q4"
         senao
              se (x < 0) e (y > 0) entao
                 eixo <- "Q2"
              senao
                   se (x < 0) e (y < 0) entao
                      eixo <- "Q3"
                   senao
                       se (x = 0) e (y <> 0) entao
                        eixo <- "Eixo Y"
                       senao
                            se (x <> 0) e (y = 0) entao
                               eixo <- "Eixo X"
                            senao
                                 eixo <- "Origem"
                            fimse
                       fimse
                   fimse
              fimse
         fimse
      fimse

      escreva("Quadrante: ",eixo,"!")
Fimalgoritmo