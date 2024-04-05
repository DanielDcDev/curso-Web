<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variaveis</title>
</head>
<body>
<?php
   $nome = "Daniel da Cruz Conceicao";
   $idade = 21;
   $altura = 1.83;
   $fumante = true;

?>

<h1>Perfil cliente</h1>
   <p> nome <?= $nome ?></p>
   <p> idade <?= $idade ?></p>
   <p> Altura <?= $altura ?></p>
   <p> Fumante <?= $fumante ?></p>
</body>
</html>