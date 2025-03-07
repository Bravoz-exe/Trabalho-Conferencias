<?php
// Conectar ao banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "techconf";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Buscar conferências no banco de dados
$sql = "SELECT id, title, date, time, city FROM conferences";
$result = $conn->query($sql);
$conferencias = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $conferencias[] = $row;
    }
}
?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InovaTech Conference Portugal</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="navbar">
    <div class="container">
        <a href="index.html" class="logo">InovaTech</a>
        <div class="nav-links">
            <a href="#speakers">Oradores</a>
            <a href="horario.html">Consultar Conferências</a>
            <a href="Viagens.html">Planeamento de Viagem</a>
            <a href="nova_conferencia.html">Nova Conferência</a>
            <a href="contacto.html">Contacto</a>
            <a href="login.html" class="btn-primary">Sign In</a>
        </div>
    </div>
</nav>

<section id="schedule" class="schedule">
    <div class="container">
        <h2>Programação da Conferência</h2>
        <div class="schedule-tabs">
            <button class="tab active" data-day="1">Dia 1</button>
            <button class="tab" data-day="2">Dia 2</button>
            <button class="tab" data-day="3">Dia 3</button>
        </div>
        <div class="schedule-grid">
            <?php foreach ($conferencias as $conferencia): ?>
                <div class="conference-card">
                    <h3><?= htmlspecialchars($conferencia['title']) ?></h3>
                    <p><strong>Data:</strong> <?= htmlspecialchars($conferencia['date']) ?> - <?= htmlspecialchars($conferencia['time']) ?></p>
                    <p><strong>Cidade:</strong> <?= htmlspecialchars($conferencia['city']) ?></p>
                    <a href="conferencia_detalhes.php?id=<?= $conferencia['id'] ?>" class="btn-details">Ver mais</a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-info">
                <h3>TechConf 2025</h3>
                <p>Reunindo as mentes mais brilhantes da tecnologia</p>
            </div>
            <div class="footer-links">
                <h4>Links Rápidos</h4>
                <a href="#schedule">Conferências</a>
                <a href="#speakers">Oradores</a>
                <a href="#blog">Blog</a>
            </div>
            <div class="footer-contact">
                <h4>Contato</h4>
                <p>contato@inovatech.com</p>
                <p>+351 123-456-789</p>
            </div>
            <div class="footer-social">
                <h4>Siga-nos</h4>
                <div class="social-links">
                    <a href="#"><i class="lucide-twitter"></i></a>
                    <a href="#"><i class="lucide-linkedin"></i></a>
                    <a href="#"><i class="lucide-facebook"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 InovaTech. Todos os direitos reservados.</p>
        </div>
    </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
