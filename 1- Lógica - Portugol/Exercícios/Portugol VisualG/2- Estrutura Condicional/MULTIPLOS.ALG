Algoritmo "multiplos"


Var
   a,b: inteiro
   c,d: real


Inicio

      escreval("Programa de verifica��o de m�ltiplos")
      escreva("Digite o primeiro n�mero: ")
      leia(a)
      escreva("Digite o segundo n�mero: ")
      leia(b)
      
      c <- a%b
      d <- b%a
      
      se a > b entao
         se c = 0 entao
            escreva("S�o M�ltiplos")
         senao
            escreva("N�o s�o M�ltiplos")
         fimse
      senao
         se d = 0 entao
            escreva("S�o M�ltiplos")
         senao
            escreva("N�o s�o M�ltiplos")
         fimse
      fimse

Fimalgoritmo