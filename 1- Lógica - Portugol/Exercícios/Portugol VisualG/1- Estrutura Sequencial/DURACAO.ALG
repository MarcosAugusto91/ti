Algoritmo "duracao"

Var
    entrada, horas: inteiro
    minutos, segundos: real

Inicio

      escreval("Programa para converter segundos em horas, minutos e segundos")
      escreva("Digite os segundos para converter: ")
      leia(entrada)
      escreval()

      horas <- entrada \ 3600
      minutos <- (entrada-(horas*3600))\60
      segundos <- entrada-(horas*3600)-(minutos*60)
      
      escreval("Horas: ",horas)
      escreval("Minutos: ",minutos)
      escreval("Segundos: ",segundos)


Fimalgoritmo