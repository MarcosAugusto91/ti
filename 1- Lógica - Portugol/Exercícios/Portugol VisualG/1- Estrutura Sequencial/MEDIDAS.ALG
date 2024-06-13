Algoritmo "medidas"

Var
   a,b,c,qua,tri,tra: real


Inicio
      escreval("Programa para cálculo de quadrado, triângulo e trapézio")
      escreva("Digite a medida A: ")
      leia(a)
      escreva("Digite a medida B: ")
      leia(b)
      escreva("Digite a medida C: ")
      leia(c)
      escreval()
      
      qua <- a*a
      tri <- (a*b)/2
      tra <- ((a+b)*c)/2)
      
      escreval("Área do quadrado: ",qua)
      escreval("Área do triângulo: ",tri)
      escreval("Área do trapézio: ",tra)

Fimalgoritmo