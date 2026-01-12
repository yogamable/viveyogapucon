<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$pack = $_POST['pack'];
$mensaje = $_POST['mensaje'];

$formcontent="
    Nombre: $name \n
    E-mail: $email \n
    Pack elegido: $pack \n
    Mensaje: $mensaje
";

$recipient = "info@viveyogapucon.cl";

$subject = "Mensaje de $nombre";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>