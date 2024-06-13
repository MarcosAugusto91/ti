Algoritmo "Recebimento"

Var
   nome : caractere
   valor, horas, result : real

Inicio

      escreval("Bem vindo, programa que cálcula seu salário")
      escreva("Digite seu nome: ")
      leia(nome)
      
      escreva("Digite o valor por hora recebido: R$")
      leia(valor)
      
      escreva("Digite as horas trabalhadas: ")
      leia(horas)
      
      result <- (valor*horas )
      escreval()
      escreva(nome, " seu salário será: R$", result:4:2)


Fimalgoritmo