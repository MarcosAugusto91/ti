Algoritmo "semnome"

Var
    numero, soma: inteiro


Inicio

      escreva("Digite um n�mero")
      leia(numero)

      enquanto numero <> 10 faca
         soma <- soma + numero
         escreva("Digite um n�mero")
         leia(numero)
      fimenquanto

      escreva("Total: ",soma)

      
      repita
            escreva("Digite um n�mero")
            leia(numero)
            soma <- soma + numero
      ate numero = 10

      soma <- soma -10

      escreva("Total: ",soma)
      
      
      



Fimalgoritmo