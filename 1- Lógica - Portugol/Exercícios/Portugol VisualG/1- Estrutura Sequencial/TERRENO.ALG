Algoritmo "Terreno"

Var
      Largura, Comprimento, Valor, Area, Preco: Real

Inicio

      escreval("Bem vindo ao programa Terreno para cálculo de Área e Preço")

      escreva("Digite a Largura do Terreno: ")
      leia(Largura)

      escreva("Digite o Comprimento do Terreno: ")
      leia(Comprimento)

      escreva("Digite o Valor do Metro Quadrado: ")
      leia(Valor)
      escreval("")

      Area <- (Largura*Comprimento)
      Preco <-(Area*Valor)

      escreval("Área do terreno: ",Area)
      escreval("Preço do terreno: ",Preco)

Fimalgoritmo