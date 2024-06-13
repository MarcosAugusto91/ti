Algoritmo "aumento"

Var
    salario, porcentagem, valoraumento, novosalario: real


Inicio

      escreval("Programa para cálculo de aumento de salário")
      escreva("Digite seu salário atual: R$")
      leia(salario)
      
      se salario <= 1000 entao
         novosalario <- salario * 1.2
         valoraumento <- novosalario - salario
         escreval("Novo Salário: R$",novosalario)
         escreval("Valor do aumento: R$", valoraumento)
         escreval("Porcentagem: 20%")
      senao
         se (salario > 1000) e (salario <= 3000) entao
            novosalario <- salario * 1.15
            valoraumento <- novosalario - salario
            escreval("Novo Salário: R$",novosalario)
            escreval("Valor do aumento: R$", valoraumento)
            escreval("Porcentagem: 15%")
         senao
            se (salario > 3000) e (salario <= 8000) entao
               novosalario <- salario * 1.10
               valoraumento <- novosalario - salario
               escreval("Novo Salário: R$",novosalario)
               escreval("Valor do aumento: R$", valoraumento)
               escreval("Porcentagem: 10%")
            senao
               novosalario <- salario * 1.05
               valoraumento <- novosalario - salario
               escreval("Novo Salário: R$",novosalario)
               escreval("Valor do aumento: R$", valoraumento)
               escreval("Porcentagem: 5%")
            fimse
         fimse
      fimse

Fimalgoritmo