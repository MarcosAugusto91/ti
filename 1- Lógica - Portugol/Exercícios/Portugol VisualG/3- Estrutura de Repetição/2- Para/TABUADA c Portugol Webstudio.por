programa {
  funcao inicio() {

    inteiro numero, resultado

    escreva("Programa para c�lculo da tabuada \n")
    escreva("Digite o n�mero que deseja fazer a taboada: ")
    leia(numero)

    para (inteiro c=1; c<=10; c++)
    {
      resultado=c*numero
      escreva(numero, " x ", c, "= ", resultado, "\n")
    }
  }
}