Algoritmo "tempoDeJogo"

Var
    inicial, final, duracao : real


Inicio

      escreval("Programa c�lcula dura��o do jogo")
      escreva("Digite a hora inicial: ")
      leia(inicial)
      escreva("Digite a hora final: ")
      leia(final)
      
      se final > inicial entao
         duracao <- final - inicial
         escreva("Dura��o: ",duracao,"h")
      senao
         duracao <- (24 - inicial) + final
         escreva("Duracao: ", duracao,"h")

      fimse

Fimalgoritmo