Algoritmo "mediaIdades"

Var
   soma, idade, cont: inteiro
   media: real

Inicio

      escreval("Programa c�lcula a m�dia at� que apare�a um n�mero negativo")

      soma  <- 0
      idade <- 0
      
      escreva("Digite uma idade: ")
      leia(idade)
           
      enquanto idade >= 0 faca
           soma <- soma + idade
           cont <- cont + 1
           escreva("Digite uma idade: ")
           leia(idade)
      fimenquanto

      se cont = 0 entao
         escreva("Resultado Inexistente")
      senao
         media <- soma / cont
         escreva("A m�dia das ",cont," idades �: ",media:5:2)
      fimse


Fimalgoritmo