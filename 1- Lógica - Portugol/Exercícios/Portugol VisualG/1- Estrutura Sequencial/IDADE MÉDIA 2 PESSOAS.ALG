Algoritmo "Idade m�dia 2 pessoas"


Var
   NomeA, NomeB : caractere
   IdadeA, IdadeB, Media : real

Inicio

      escreval("Bem vindo ao gerador de m�dia de idades")
      escreval()
      escreva("Digite o primeiro Nome: ")
      leia(NomeA)
      escreva("Digite sua Idade: ")
      leia(IdadeA)
      escreva("Digite o segundo Nome: ")
      leia(NomeB)
      escreva("Digite sua Idade: ")
      leia(IdadeB)
      
      Media <- ((IdadeA+IdadeB)/2)
      escreval()
      escreval("A idade m�dia de ", NomeA," e ", NomeB, " �: ",Media)


Fimalgoritmo