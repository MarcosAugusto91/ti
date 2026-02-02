  <html>
    <head>  
        <meta charset="utf-8"/>
    </head> 
    <body>

    <?php

        function calculaImpostoDeRenda ($salario){
            if ($salario < 1903.98){
                echo "Isento de contribuição";
            }
            else if (($salario > 1903.98) && ($salario < 2826.65)){
                echo 'Alíquota 7,5%  </br>Imposto a pagar: R$' . $salario * 0.075;
            }
            else if (($salario > 2826.65) && ($salario< 3751.05)){
                echo 'Alíquota 15%  </br>Imposto a pagar: R$' . $salario * 0.15;
            }
            else if (($salario > 3751.05) && ($salario < 4664.68)){
                echo 'Alíquota 22,5%  </br>Imposto a pagar: R$' . $salario * 0.225;
            }
            else if ($salario > 4664.68){
                echo 'Alíquota 27,5%  </br>Imposto a pagar: R$' . $salario * 0.275;
            }
        }

        function calculaImpostoDeRenda2 ($salario) {
            $imposto = 0;
            $aliquota = 0;

            if ($salario < 1903.98){
                $imposto = 0;
                $aliquota = 0;}
            else if (($salario > 1903.98) && ($salario < 2826.65)){
                $imposto = $salario * 0.075;
                $aliquota = 0.075;}
            else if (($salario > 2826.65) && ($salario< 3751.05)){
                $imposto = $salario * 0.15;
                $aliquota = 0.15;}
            else if (($salario > 3751.05) && ($salario < 4664.68)){    
                $imposto = $salario * 0.225;
                $aliquota = 0.225;}
            else if ($salario > 4664.68){
                $imposto = $salario * 0.275;
                $aliquota = 0.275;}

            return $imposto;
        }

        calculaImpostoDeRenda(2200);
        echo '</br></br> Imposto do Cálculo 2: R$' . calculaImpostoDeRenda2(3000);



    ?>

    </body>
</hmtl>