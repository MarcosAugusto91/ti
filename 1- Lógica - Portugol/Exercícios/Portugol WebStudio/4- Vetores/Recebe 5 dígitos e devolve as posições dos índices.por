programa {
  funcao inicio() {

    inteiro vetor[5]
    inteiro n, contador

    escreva("Quantos n�meros deseja digitar?(at� 5) ")
    leia(n)

    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Digite um n�mero: ")
      leia(vetor[contador])
    }

    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Posi��o:",contador,": ",vetor[contador],"\n")
    }   

  }
}
