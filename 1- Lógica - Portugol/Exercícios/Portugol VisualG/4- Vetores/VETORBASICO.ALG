Algoritmo "vetorBasico"



Var

      n,i: inteiro
      vet: vetor [0..9] de real

Inicio

      escreval("Programa básico sobre vetor")
      escreva("Quantos números deseja digitar?(Até10) ")
      leia(n)
      
      para i de 0 ate n-1 faca
             escreva("Digite um número: ")
             leia(vet[i])
      fimpara
      
      escreval()
      
      para i de 0 ate n-1 faca
            escreva("Posição",i,": ", vet[i])
            escreval()
      fimpara

Fimalgoritmo