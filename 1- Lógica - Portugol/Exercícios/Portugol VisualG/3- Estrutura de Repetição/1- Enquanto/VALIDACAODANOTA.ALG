Algoritmo "validacaoDaNota"

Var
   avaliacao1, avaliacao2, media: real


Inicio

     escreval("Programa cálcula a média do aluno com validações!")

     //Validação primeira nota
     escreva("Digite a nota da Primeira Avaliação: ")
     leia(avaliacao1)

     enquanto (avaliacao1 < 0) ou (avaliacao1 > 10) faca
        escreval("Nota inválida, digite novamente!")
        escreva("Digite a nota da Primeira Avaliação: ")
        leia(avaliacao1)
     fimenquanto
     
     //Validação segunda nota
     escreva("Digite a nota da Segunda Avaliação: ")
     leia(avaliacao2)

     enquanto (avaliacao2 < 0) ou (avaliacao2 > 10) faca
        escreval("Nota inválida, digite novamente!")
        escreva("Digite a nota da Segunda Avaliação: ")
        leia(avaliacao2)
     fimenquanto

     media <- (avaliacao1 + avaliacao2)/2
     escreva("Média final do aluno: ",media)

Fimalgoritmo