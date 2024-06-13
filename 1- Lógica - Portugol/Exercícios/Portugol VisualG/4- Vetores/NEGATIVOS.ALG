Algoritmo "negativos"

Var
   i,n: inteiro
   vet: vetor [0..9] de real


Inicio

      escreval("Programa usa vetores para exibir apenas os negativos!")
      escreva("Quantos números deseja digitar: ")
      leia(n)
      
      para i de 0 ate n-1 faca
           escreva("Digite um número: ")
           leia(vet[i])
      fimpara

      escreval()
      
      para i de 0 ate n-1 faca
           se vet[i] < 0 entao
              escreva("Posição",i,": ",vet[i])
              escreval()
           fimse
      fimpara

Fimalgoritmo