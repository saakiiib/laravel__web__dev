<?php

$randomNumbers = [208, 54, 376, 162, 440, 64, 390, 482, 67, 209];

$filteredArray = array_filter($randomNumbers, function($number) {
    return $number > 50 && $number % 2 == 0;
});

$mappedArray = array_map(function($number) {
    return $number * 2;
}, $filteredArray);

print_r($mappedArray);

?>
