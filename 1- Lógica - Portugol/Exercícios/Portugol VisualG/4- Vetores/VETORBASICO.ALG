Algoritmo "vetorBasico"



Var

      n,i: inteiro
      vet: vetor [0..9] de real

Inicio

      escreval("Programa b�sico sobre vetor")
      escreva("Quantos n�meros deseja digitar?(At�10) ")
      leia(n)
      
      para i de 0 ate n-1 faca
             escreva("Digite um n�mero: ")
             leia(vet[i])
      fimpara
      
      escreval()
      
      para i de 0 ate n-1 faca
            escreva("Posi��o",i,": ", vet[i])
            escreval()
      fimpara

Fimalgoritmo