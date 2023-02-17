<?php
// conferir a conexão com o banco de dados
include_once 'conexão.php';

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANATIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANATIZE_STRING);

echo "Nome: " . $nome . "<br>";
echo "Email: " . $email . "<br>";