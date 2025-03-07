<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'vendor/autoload.php'; // Se estiver usando Composer
// Se baixou manualmente, use: require 'caminho/para/PHPMailer/src/PHPMailer.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);
    
    try {
        // Configuração do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Servidor SMTP (ex: Gmail)
        $mail->SMTPAuth = true;
        $mail->Username = 'ddinis9bravo@gmail.com'; // Seu e-mail
        $mail->Password = 'vtvz qqrc phwr vnoy'; // Sua senha ou App Password (para Gmail)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configuração do e-mail
        $mail->setFrom($email, $nome);
        $mail->addAddress('ddinis9bravo@gmail.com'); // Para quem enviar
        $mail->Subject = "Nova mensagem do formulário de contato";
        $mail->Body = "Nome: $nome\nE-mail: $email\nMensagem:\n$mensagem";

        $mail->send();
        echo "Mensagem enviada com sucesso!";
    } catch (Exception $e) {
        echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
    }
} else {
    echo "Método de requisição inválido.";
}
?>

