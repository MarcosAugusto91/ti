Algoritmo "trocoVerificado"

Var

   preco, quantidade, recebido, troco: real


Inicio

      escreval("Programa com a finalidade de c�lcular o troco da transa��o")
      escreva("Digite o pre�o da mercadoria: R$")
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