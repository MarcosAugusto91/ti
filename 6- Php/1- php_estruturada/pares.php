<?php
echo 'Números Pares: <br>';

for ($num = 1000; $num <= 2000; $num++) {     
    if ($num % 2 == 0) {
        echo $num . ", ";
    }
}
?>