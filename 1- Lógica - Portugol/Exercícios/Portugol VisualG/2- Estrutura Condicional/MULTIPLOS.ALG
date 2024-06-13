Algoritmo "multiplos"


Var
   a,b: inteiro
   c,d: real


Inicio

      escreval("Programa de verificação de múltiplos")
      escreva("Digite o primeiro número: ")
      leia(a)
      escreva("Digite o segundo número: ")
      leia(b)
      
      c <- a%b
      d <- b%a
      
      se a > b entao
         se c = 0 entao
            escreva("São Múltiplos")
         senao
            escreva("Não são Múltiplos")
         fimse
      senao
         se d = 0 entao
            escreva("São Múltiplos")
         senao
            escreva("Não são Múltiplos")
         fimse
      fimse

Fimalgoritmo