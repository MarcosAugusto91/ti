Algoritmo "Terreno"

Var
      Largura, Comprimento, Valor, Area, Preco: Real

Inicio

      escreval("Bem vindo ao programa Terreno para c�lculo de �rea e Pre�o")

      escreva("Digite a Largura do Terreno: ")
      leia(Largura)

      escreva("Digite o Comprimento do Terreno: ")
      leia(Comprimento)

      escreva("Digite o Valor do Metro Quadrado: ")
      leia(Valor)
      escreval("")

      Area <- (Largura*Comprimento)
      Preco <-(Area*Valor)

      escreval("�rea do terreno: ",Area)
      escreval("Pre�o do terreno: ",Preco)

Fimalgoritmo