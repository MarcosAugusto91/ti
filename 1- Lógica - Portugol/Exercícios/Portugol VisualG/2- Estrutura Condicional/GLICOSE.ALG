Algoritmo "glicose"

Var
      glicose, classificacao: real

Inicio
      escreval("Programa que realiza a classificação da glicose!")
      escreva("Digite a medida da glicose(mg/dl: ")
      leia(glicose)
      
      se glicose <= 100 entao
         escreva("Grau de Glicose NORMAL!")
      senao
         se (glicose > 100) e (glicose <= 140) entao
            escreva("Grau de Glicose ELEVADO!")
         senao
            escreva("Grau de Glicose DIABETES!")
         fimse
      fimse
Fimalgoritmo