Algoritmo "consumo"

Var
   distancia, gasto, consumo: real


Inicio
      escreval("Programa para c�lculo de consumo m�dio por km")
      escreva("Digite a dist�ncia percorrida: ")
      leia(distancia)
      
      escreva("Digite a quantidade de combust�vel gasto: ")
      leia(gasto)
      
      escreval()
      consumo <- (distancia/gasto)
      escreva("Seu ve�culo tem um consumo m�dio de: ",consumo:4:3," Km/L")


Fimalgoritmo