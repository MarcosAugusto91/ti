programa {
  inclua biblioteca Matematica-->Mat
  funcao inicio() {

    inteiro n, contador, quantidade=0
    cadeia pares=""

    escreva("Quantos n�meros ser�o digitados? ")
    leia(n)

    cadeia numeros[n]


    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Digite um n�mero: ")
      leia(numeros[contador])
      

      se(numeros[contador] % 2 == 0){
        pares += numeros[contador] + " " 
        quantidade = quantidade +1
      }
    }

    escreva("\nN�MEROS PARES: \n", pares)
    escreva("\n \nQUANTIDADE DE PARES: \n", quantidade)
  
  }
}
