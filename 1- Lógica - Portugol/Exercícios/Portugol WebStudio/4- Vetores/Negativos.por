programa {
  funcao inicio() {
    
    inteiro n

    escreva("Programa usa vetores para exibir apenas os negativos! \n")
    escreva("Quantos n�meros deseja digitar? ")
    leia(n)

    inteiro vetor[n], contador

    para(contador = 0; contador==0 ou contador< n; contador++){
      escreva("Digite um n�mero: ")
      leia(vetor[contador])
    }

    para(contador = 0; contador==0 ou contador< n; contador++){
      se(vetor[contador] < 0){
      escreva("Posi��o:",contador,": ",vetor[contador],"\n")
      }
    }


  }
}
