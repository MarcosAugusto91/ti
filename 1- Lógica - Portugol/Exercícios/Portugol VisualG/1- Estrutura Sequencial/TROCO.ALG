Algoritmo "Troco"

Var
   Preco, Quantidade, Recebido, Troco : real


Inicio

      escreval("Bem vindo ao programa gerador de troco")
      escreva("Digite o Preço da mercadoria: R$")
      leia(Preco)
      escreva("Digite a quantidade desejada: ")
      leia(Quantidade)
      escreva("Digite o valor Recebido: R$")
      leia(Recebido)
      
      Troco <- (Recebido-(Preco*Quantidade))
      escreval()
      escreva("Troco: R$",Troco:5:2)




Fimalgoritmo