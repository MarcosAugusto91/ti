Algoritmo "lanchonete"

Var
   a,b,c,d,f,preco :real
   quantidade,codigo: inteiro

Inicio
      escreval("Este programa de loja cálcula a partir da tabela!")
      escreval()

      escreval("TABELA:")
      escreval("Jogos Xbox360 código 1: R$5,00")
      escreval("Jogos SuperNintendo código 2: R$3,50")
      escreval("Jogos XboxOne código 3: R$4,80")
      escreval("Jogos Playstation 5 código 4: R$8,90")
      escreval("Jogos Switch código 5: R$7,32")
      escreval()

      escreva("Digite o código do produto desejado: ")
      leia(codigo)
      escreva("Quantas unidades? ")
      leia(quantidade)

      a <- 5.00
      b <- 3.50
      c <- 4.80
      d <- 8.90
      f <- 7.32

      escolha codigo
      caso 1
          preco <- a * quantidade
      caso 2
          preco <- b * quantidade
      caso 3
          preco <- c * quantidade
      caso 4
          preco <- d * quantidade
      caso 5
          preco <- f * quantidade
      outrocaso
          escreval("Código inválido")
      fimescolha

      escreva("Valor da sua compra: R$",preco:6:2)

Fimalgoritmo