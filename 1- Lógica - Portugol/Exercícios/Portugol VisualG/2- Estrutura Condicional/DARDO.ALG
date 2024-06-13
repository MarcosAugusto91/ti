Algoritmo "dardo"


Var
   a,b,c: real
   
Inicio
      escreval("Programa cálcula a melhor jogada")
      escreva("Digite a primeira jogada(Distância): ")
      leia(a)
      escreva("Digite a segunda jogada(Distância): ")
      leia(b)
      escreva("Digite a terceira jogada(Distância): ")
      leia(c)

      se (a > b) e (a > c) entao
         escreva("O primeiro foi o melhor arremesso!")
      senao
         se b > c entao
         escreva("O segundo foi o melhor arremesso!")
         senao
              escreva("O terceiro foi o melhor arremesso!")
         fimse
      fimse


Fimalgoritmo