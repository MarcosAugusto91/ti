Algoritmo "senhaFixa"

Var
   senha, tentativa, cont: inteiro
   ligado: caractere

Inicio
      ligado <- "S"
      
enquanto (ligado = "S") ou (ligado = "s") faca

      senha <- 2002
      cont <- 1
      escreval("Descubra a senha de 4 D�gitos")
      escreva(" 1� Tentativa: ")
      leia(tentativa)

      enquanto tentativa <> 2002 faca
               cont <- cont +1
               escreval("Senha Inv�lida! Tenta Novamente")

               escreva(cont,"� Tentativa: ")
               leia(tentativa)
      fimenquanto

      escreval()
      escreval("Acesso Permitido!")
      
      escreva("Deseja Reiniciar? S/N) ")
      leia(ligado)
      escreval()

fimenquanto

Fimalgoritmo