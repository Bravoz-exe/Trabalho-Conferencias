<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $speakerName = $_POST['speaker'];
    $conferenceId = $_POST['conference_id'];
    $duration = $_POST['duration'];

    // Verifique se todos os campos foram preenchidos
    if (!$speakerName || !$conferenceId || !$duration) {
        echo "Por favor, preencha todos os campos.";
        exit;
    }

    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
    // Exemplo:
    // saveSpeakerParticipation($speakerName, $conferenceId, $duration);

    echo "Inscrição realizada com sucesso!";
} else {
    header("Location: nova_conferencia.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Participar numa Conferência</title>
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
                <a href="nova_conferencia.php">Participar numa Conferência</a>
                <a href="contacto.html">Contacto</a>
                <a href="login.html" class="btn-primary">Sign In</a>
            </div>
            <button class="mobile-menu-btn">
                <i class="lucide-menu"></i>
            </button>
        </div>
    </nav>

    <section id="submit-conference" class="submit-conference">
        <div class="container">
            <h2>Participar numa Conferência</h2>
            <p class="section-desc">Escolha uma conferência para participar como orador.</p>

            <form class="conference-form" action="participate_conference.php" method="POST">
                <div class="form-group">
                    <label for="speaker-name">Nome do Orador</label>
                    <input type="text" id="speaker-name" name="speaker" required placeholder="Nome completo do orador" class="form-control">
                </div>
                <div class="form-group">
                    <label for="conference-select">Escolha uma Conferência</label>
                    <select id="conference-select" name="conference_id" required class="form-control">
                        <option value="">Selecione uma conferência</option>
                        <!-- Conferências disponíveis serão carregadas dinamicamente -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="presentation-topic">Tema Principal</label>
                    <input type="text" id="presentation-topic" name="topic" required placeholder="Tema da apresentação" class="form-control">
                </div>
                <div class="form-group">
                    <label for="presentation-duration">Duração da Apresentação</label>
                    <input type="number" id="presentation-duration" name="duration" required placeholder="Duração em horas" class="form-control">
                </div>
                <button type="submit" class="btn-primary">Participar</button>
            </form>
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
                    <a href="#schedule">Conferencias</a>
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
                <p>&copy; 2025 Inovatch. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

