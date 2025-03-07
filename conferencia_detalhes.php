<?php
require('fpdf/fpdf.php');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ConferenciaDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

if (!isset($_GET['id'])) {
    die("ID do evento não especificado.");
}

$id = intval($_GET['id']);

// Verifique se o ID é um número inteiro
if (!is_int($id) || $id <= 0) {
    die("Por favor, forneça um ID de evento válido.");
}

$sql = "SELECT e.titulo, e.hora_inicio, e.hora_fim, e.descricao, en.rua, en.cidade
        FROM Eventos e
        JOIN Enderecos en ON e.endereco_id = en.endereco_id
        WHERE e.evento_id = $id";

$result = $conn->query($sql);

if ($result->num_rows == 0) {
    die("Evento não encontrado.");
}

$evento = $result->fetch_assoc();

// Criar PDF
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 16);
$pdf->Cell(190, 10, utf8_decode($evento['titulo']), 0, 1, 'C');
$pdf->Ln(10);
$pdf->SetFont('Arial', '', 12);
$pdf->MultiCell(190, 10, utf8_decode("Data: " . $evento['hora_inicio'] .
                                    "\nFim: " . $evento['hora_fim'] .
                                    "\nLocal: " . $evento['rua'] . ", " . $evento['cidade'] .
                                    "\nDescrição: " . $evento['descricao']));
$pdf->Output();
?>