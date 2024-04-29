<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>funcioes</title>
</head>
<body>
    <?php
        $salario = 1950.99;


        function CalcularImposto($salario) {
            if ($salario < 1903.98) {
                    return  "isento";
                }else if ($salario > 1903.98 ||$salario < 2826.66) {
                    return "7.5%";
                }else if($salario > 2826.66 || $salario < 3751.05) {
                    return "15%";
                }else if($salario > 3751.05|| $salario < 4664.68) {
                    return  "22.5%";
                }else{
                    return "27.5%";
                }
                
        }
        
        echo CalcularImposto($imposto);

    ?>
</html>