Algoritmo "temperatura"

Var
   escala: caractere
   temperatura, conversao: real
Inicio
      escreval("Programa converte a temperatura para a escala desejada")
      escreva("Digite a escala inicial Celsius(C) ou Fahrenheit(F): ")
      leia(escala)
      escreva("Digite a temperatura: ")
      leia(temperatura)
      
      se escala = "F" entao
         conversao <- (5 / 9) * (temperatura - 32)
         escreva("Temperatura: ",conversao:4:2,"C")
      senao
         conversao <- (9 * temperatura / 5) + 32
         escreva("Temperatura: ",conversao:4:2,"F")
      fimse

Fimalgoritmo