Algoritmo "aumento"

Var
    salario, porcentagem, valoraumento, novosalario: real


Inicio

      escreval("Programa para c�lculo de aumento de sal�rio")
      escreva("Digite seu sal�rio atual: R$")
      leia(salario)
      
      se salario <= 1000 entao
         novosalario <- salario * 1.2
         valoraumento <- novosalario - salario
         escreval("Novo Sal�rio: R$",novosalario)
         escreval("Valor do aumento: R$", valoraumento)
         escreval("Porcentagem: 20%")
      senao
         se (salario > 1000) e (salario <= 3000) entao
            novosalario <- salario * 1.15
            valoraumento <- novosalario - salario
            escreval("Novo Sal�rio: R$",novosalario)
            escreval("Valor do aumento: R$", valoraumento)
            escreval("Porcentagem: 15%")
         senao
            se (salario > 3000) e (salario <= 8000) entao
               novosalario <- salario * 1.10
               valoraumento <- novosalario - salario
               escreval("Novo Sal�rio: R$",novosalario)
               escreval("Valor do aumento: R$", valoraumento)
               escreval("Porcentagem: 10%")
            senao
               novosalario <- salario * 1.05
               valoraumento <- novosalario - salario
               escreval("Novo Sal�rio: R$",novosalario)
               escreval("Valor do aumento: R$", valoraumento)
               escreval("Porcentagem: 5%")
            fimse
         fimse
      fimse

Fimalgoritmo