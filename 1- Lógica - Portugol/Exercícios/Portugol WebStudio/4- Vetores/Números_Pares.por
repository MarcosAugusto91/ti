programa {
  inclua biblioteca Matematica-->Mat
  funcao inicio() {

    inteiro n, contador, quantidade=0
    cadeia pares=""

    escreva("Quantos números serão digitados? ")
    leia(n)

    cadeia numeros[n]


    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Digite um número: ")
      leia(numeros[contador])
      

      se(numeros[contador] % 2 == 0){
        pares += numeros[contador] + " " 
        quantidade = quantidade +1
      }
    }

    escreva("\nNÚMEROS PARES: \n", pares)
    escreva("\n \nQUANTIDADE DE PARES: \n", quantidade)
  
  }
}
