<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

   
    if (!empty($name) && !empty($email) && !empty($message)) {
        
        $to = "nicolasmelos408@gmail.com";
        $subject = "Nova mensagem de $name";
        $headers = "De: $email";

        
        if (mail($to, $subject, $message, $headers)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Erro ao enviar mensagem.";
        }
    } else {
        echo "Por favor, preencha todos os campos.";
    }
}
?>