Algoritmo "somaImpares"


Var
   x,y,z,contador: inteiro

Inicio

    escreval("Programa cálcula números impares intermediários aos da escolha")
    escreva("Digite o valor de X: ")
    leia(x)
    escreva("Digite o valor de Y: ")
    leia(y)

    se x > y entao
      z <- x
      x <- y
      y <- z
      z <- 0
    fimse
      
      para contador de x ate y faca
           se contador % 2 <> 0 entao
              escreval("Número Impar: ",contador)
              z <- z + contador
           fimse
      fimpara
      escreval()
      escreva("Soma dos números impares entre a seleção: ",z)
      escreval()
      
      z <- 0
      
      para contador de x ate y faca
           se contador % 2 = 0 entao
              escreval("Número par: ",contador)
              z <- z + contador
           fimse
      fimpara
      escreval()
      escreva("Soma dos números pares entre a seleção: ",z)


Fimalgoritmo




