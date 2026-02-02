<?php
for ($num = 2; $num <= 100; $num++) {
    $primo = true;

    for ($i = 2; $i < $num; $i++) {
        if ($num % $i == 0) {
            $primo = false;
            break;
        }
    }

    if ($primo) {
        echo $num . " é primo<br>";
    }
}
?>
