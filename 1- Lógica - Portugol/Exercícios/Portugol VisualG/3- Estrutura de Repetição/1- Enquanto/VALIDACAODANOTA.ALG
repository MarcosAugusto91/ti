Algoritmo "validacaoDaNota"

Var
   avaliacao1, avaliacao2, media: real


Inicio

     escreval("Programa c�lcula a m�dia do aluno com valida��es!")

     //Valida��o primeira nota
     escreva("Digite a nota da Primeira Avalia��o: ")
     leia(avaliacao1)

     enquanto (avaliacao1 < 0) ou (avaliacao1 > 10) faca
        escreval("Nota inv�lida, digite novamente!")
        escreva("Digite a nota da Primeira Avalia��o: ")
        leia(avaliacao1)
     fimenquanto
     
     //Valida��o segunda nota
     escreva("Digite a nota da Segunda Avalia��o: ")
     leia(avaliacao2)

     enquanto (avaliacao2 < 0) ou (avaliacao2 > 10) faca
        escreval("Nota inv�lida, digite novamente!")
        escreva("Digite a nota da Segunda Avalia��o: ")
        leia(avaliacao2)
     fimenquanto

     media <- (avaliacao1 + avaliacao2)/2
     escreva("M�dia final do aluno: ",media)

Fimalgoritmo