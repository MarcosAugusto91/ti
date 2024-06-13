Algoritmo "operadora"

Var
    minutos, valor: real


Inicio

      escreval("Programa cálcula sua conta de telefone")
      escreva("Quantos minutos foram utilizados? ")
      leia(minutos)
      
      se minutos <= 100 entao
         valor <- 50,00
         escreva("Valor da conta: R$",valor)
         senao
              valor <- ((minutos-100)*2)+ 50,00
              escreva("Valor da conta: R$",valor)
         fimse


Fimalgoritmo