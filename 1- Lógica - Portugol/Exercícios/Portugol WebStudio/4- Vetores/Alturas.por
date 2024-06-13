programa {
  inclua biblioteca Matematica-->Mat
  funcao inicio() {

    inteiro n, contador, menor=0
    real  totalaltura =0, alturamedia =0
    cadeia pessoas=""

    escreva("Quantos Pessoas serão avaliadas? ")
    leia(n)
    
    cadeia nome[n]
    inteiro idade[n]
    real altura[n], menores


    para(contador = 0; contador==0 ou contador<n; contador++){
      escreva("Dados da ",contador+1,"ª pessoa: \n")
      escreva("Digite um nome: ")
      leia(nome[contador])

      escreva("Digite sua idade: ")
      leia(idade[contador])
      
      se(idade[contador] < 16){
        menor++
        pessoas += nome[contador] + "\n" 
      }
      
      escreva("Digite sua altura: ")
      leia(altura[contador])
      totalaltura = totalaltura + altura[contador]
    }

    alturamedia = totalaltura / n
    escreva("A altura média das pessoas avaliadas é: ",Mat.arredondar(alturamedia,2), "\n")
   
    menores = (menor * 100) / n
    escreva("Pessoas avaliadas com menos de 16 anos: ", Mat.arredondar(menores,2), "%\n")

  escreva("São menores de idade: \n",pessoas)
  
  }
}
