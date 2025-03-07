<?php
// participate_conference.php

// Conectar ao banco de dados (substitua com suas próprias credenciais)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "techconf";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verificar se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receber dados do formulário
    $speakerName = $_POST['speaker'];
    $conferenceId = $_POST['conference_id'];
    $topic = $_POST['topic'];
    $duration = $_POST['duration'];

    // Inserir dados no banco de dados
    $stmt = $conn->prepare("INSERT INTO speaker_participation (conference_id, speaker_name, topic, duration) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isds", $conferenceId, $speakerName, $topic, $duration);

    if ($stmt->execute()) {
        echo "Participação confirmada!";
        header("Location: horario.php"); // Redirecionar para a página de Consultar Conferências
        exit;
    } else {
        echo "Erro ao salvar participação: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>