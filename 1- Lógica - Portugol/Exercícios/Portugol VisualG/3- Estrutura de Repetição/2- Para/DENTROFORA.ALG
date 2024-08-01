Algoritmo "dentroFora"

Var
   quantidade, numero, dentro, fora, contador: inteiro


Inicio

      escreval("Programa exibe quais números estão fora do intervalo 10-20")
      escreva("Digite a quantidade de números que deseja digitar: ")
      leia(quantidade)
      
      para contador de 1 ate quantidade faca
           escreva("Digite um número: ")
           leia(numero)
           
           se (numero < 10) e (numero > 20) entao
              fora <- fora +1
           senao
              dentro <- dentro +1
           fimse
      fimpara
      
      escreval("Valores dentro do intervalo: ", dentro)
      escreva("Valores fora do intervalo: ", fora)

Fimalgoritmo