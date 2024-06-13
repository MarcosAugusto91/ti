programa {
  funcao inicio() {

    inteiro vetor[5]
    inteiro n, contador

    escreva("Quantos números deseja digitar?(até 5) ")
    leia(n)

    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Digite um número: ")
      leia(vetor[contador])
    }

    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Posição:",contador,": ",vetor[contador],"\n")
    }   

  }
}
