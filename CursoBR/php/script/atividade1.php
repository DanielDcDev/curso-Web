<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade</title>
</head>
<body>
<?php
    $idade = 18;
    $peso = 40;
    $requisito = true;
    $motivo =  "nada";

    if ($idade>=16 && $idade < 70){
            $motivo = "idade";
        if($peso > 50){
            $requisito =true;
            $motivo = "peso";
        }else {
            $requisito = false;
        }
    }

    ?>

    <h1>Detalhes da requisicao</h1>
    <p>O usuario pode doar sangu? </p>
    <?php
        if ($requisito) {
            echo 'SIM';

        } else {
            echo 'NÃO ';
            echo $motivo;
        }
        ?>
</body>
</html>