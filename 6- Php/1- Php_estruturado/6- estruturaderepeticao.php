<html>
    <head>  
        <meta charset="utf-8"/>
    </head> 
    <body>

    <?php
        //Inserindo o Array
        $listadefilmes = [
            'Piratas do caribe',
            'Edward mãos de tesoura',
            'A Fantástica fábrica de chocolate',
            'Vingadores',
            'Mario', ];

        //Listando Array com While
            echo '<h4>Listando um Array com While:</h4>';
            $idx = 0;
            while ($idx < count($listadefilmes))
            {
                echo $listadefilmes[$idx];
                echo '</br>';
                $idx++;
            }
            echo '<hr>';    

        //Listando Array com Do While
            echo '<h4>Listando um Array com Do While:</h4>';
            $idx = 0;
            do {
                echo $listadefilmes[$idx];
                echo '</br>';
                $idx++;
            } while($idx < count($listadefilmes));
            echo '<hr>';    

        //Listando Array com For
            echo '<h4>Listando um Array com For</h4>';
            for($idx = 0; ($idx < count($listadefilmes)); $idx++)
                {
                echo $listadefilmes[$idx];
                echo '</br>';
                }
            echo '<hr>';
            $idx = 0;

        //Listando Array com Foreach
            echo '<h4>Listando um Array com Foreach</h4>';
            foreach($listadefilmes as $idx)
            {
            echo $idx . '</br>';
            }
            echo '<hr>';

        //Inserindo Array multidimensional
            echo '<h4>Listando um Array multidimensional com While</h4>';
            $Comida = ['Doces'];
            $Comida = ['Salgados'];
            $Comida['Doces'] = ['Brownies', 'Brigadeiros', 'Cookies'];
            $Comida['Salgados'] = ['Assados', 'Fritos'];
            $idx = 0;
            $idx2 = 0;

        //Listando Array multidimensional com While
            while($idx < count($Comida['Doces']) or $idx2 < count($Comida['Salgados']))
                {
                    if ($idx < count($Comida['Doces']))
                        {
                        echo '[' . $idx .'] ';
                        echo $Comida['Doces'][$idx];
                        echo '</br>';
                        $idx++;    
                        }
                    else {
                        echo '[' . $idx2 .'] ';
                        echo $Comida['Salgados'][$idx2];
                        echo '</br>';
                        $idx2++; 
                    }    

                }

        //Exibindo o array completo com tag de personalização do HTML;
            echo '<pre>';
            print_r($Comida);
            echo '</pre>';

    ?> 
    </body>
</html>