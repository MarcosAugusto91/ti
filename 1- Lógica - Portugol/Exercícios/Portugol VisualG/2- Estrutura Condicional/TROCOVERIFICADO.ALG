Algoritmo "trocoVerificado"

Var

   preco, quantidade, recebido, troco: real


Inicio

      escreval("Programa com a finalidade de cálcular o troco da transação")
      escreva("Digite o preço da mercadoria: R$")
      leia(preco)
      escreva("Digite a quantidade da mercadoria: ")
      leia(quantidade)
      escreva("Digite o valor recebido: R$")
      leia(recebido)

      troco <- recebido - (quantidade * preco)

      se troco >= 0 entao
         escreva("Troco do cliente: R$",troco)
      senao
         escreva("Faltando: R$",abs(troco)," pra completar o pagamento")
      fimse

Fimalgoritmo