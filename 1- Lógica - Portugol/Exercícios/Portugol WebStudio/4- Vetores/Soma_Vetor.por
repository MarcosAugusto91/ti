programa {
  funcao inicio() {
    
    inteiro n

    escreva("Programa usa vetores para exibir apenas os negativos! \n")
    escreva("Quantos números deseja digitar? ")
    leia(n)

    inteiro vetor[n], contador, soma = 0
    real media = 0

    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Digite um número: ")
      leia(vetor[contador])
      soma = soma + vetor[contador]
    }
    media = (soma / n)

    escreva("Total da soma dos índices do vetor: ",soma,"\n")
    escreva("Média dos índices do vetor: ",media)
    }
  }

