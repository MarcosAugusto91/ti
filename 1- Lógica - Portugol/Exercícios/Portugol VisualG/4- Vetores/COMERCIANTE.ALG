Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/08/2024
Var

      nome: vetor [0..4] de caractere
      pcompra: vetor [0..4] de real
      pvenda: vetor [0..4] de real
      n: inteiro
      tcompra, tvenda, tlucro, lucro, lucro10, lucro20, lucromaior: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   repita
   escreva("Digite o número de produtos que serão validados (Até 5): ")
   leia(n)
   ate (n > 0) e (n < 6)
   

   para n de 0 ate n-1 faca
        escreva("Nome do produto: ")
        leia(nome[n])
        escreva("Preço de compra: R$")
        leia(pcompra[n])
        escreva("Preço de venda: R$")
        leia(pvenda[n])
        escreval

        tcompra <- tcompra + pcompra[n]
        tvenda  <- tvenda + pvenda[n]
        
        lucro <- ((pvenda[n] / pcompra[n])*100)-100
        se lucro < 10 entao
           lucro10 <- lucro10 +1
        senao
                se (lucro >= 10) e (lucro <= 20) entao
                   lucro20 <- lucro20 + 1
                senao
                     lucromaior <- lucromaior +1
                fimse
        fimse
        
   fimpara

   escreval("Valor total da compra: R$",  tcompra)
   escreval("Valor total da venda: R$", tvenda)
   tlucro <- tvenda - tcompra
   escreval("Lucro total: R$", tlucro)
   escreval("Produtos com Lucro menor que 10%:", lucro10)
   escreval("Produtos com Lucro >10% e <20%: ", lucro20)
   escreval("Produtos com Lucro maior que 20%:", lucromaior)

Fimalgoritmo