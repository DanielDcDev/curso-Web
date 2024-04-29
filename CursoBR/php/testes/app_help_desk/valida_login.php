<?php 
    /* print_r($_GET);

    echo `<br/>`;

    echo $_GET['email'];
    echo `<br/>`;
    echo $_GET['password'];
*/
//usuarios do sistema
//variavel verifica veracidade dos usuarios
$usuario_autenticado;
$usuarios_app = array (
    array('email' => 'adm@teste.com.br','password' => '1234' ),
    array('email'=> 'user@teste.com.br', 'password' => '12345'),
    array('email'=> 'sup@teste.com.br', 'password ' => '1234'),
);


foreach ($usuarios_app as $user) {
    if($user['emai'] == $_POST['email'] && $user['password'] == $_POST['password'] ){
        $usuario_autenticado = true;
    }
}
if($usuario_autenticado){
    echo "usuario Autenticado";
}else{
    header('Location: indez.php?login=erro');
}

print_r($_POST);
    echo '<br/>';

    echo $_POST['email'];
    echo '<br/>';
    echo $_POST['password'];
?>