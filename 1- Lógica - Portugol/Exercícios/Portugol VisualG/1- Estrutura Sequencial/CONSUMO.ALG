Algoritmo "consumo"

Var
   distancia, gasto, consumo: real


Inicio
      escreval("Programa para cálculo de consumo médio por km")
      escreva("Digite a distância percorrida: ")
      leia(distancia)
      
      escreva("Digite a quantidade de combustível gasto: ")
      leia(gasto)
      
      escreval()
      consumo <- (distancia/gasto)
      escreva("Seu veículo tem um consumo médio de: ",consumo:4:3," Km/L")


Fimalgoritmo