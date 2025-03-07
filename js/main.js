// Data
const speakers = [
    {
        name: 'Dra. Sarah Chen',
        role: 'Diretor de Pesquisa de IA',
        company: 'Inovatech',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        topic: 'O futuro da IA nas empresas'
    },
    {
        name: 'Michael Rodriguez',
        role: 'Diretor de Tecnologia',
        company: 'Inovatech',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
        topic: 'Escalonamento da arquitetura de microprocessadores'
    }
	
];

const conferences = [
    {
        id: 1,
        title: 'O futuro da IA nas empresas',
        speaker: 'Dra. Sarah Chen',
        date: '2025-03-15',
        time: '09:00',
        city: 'Lisboa',
        venue: 'Inovatech Lisboa, Av. da Liberdade 110',
        description: 'Explore como a inteligência artificial está transformando as operações corporativas e o que o futuro reserva para as empresas que adotam tecnologias de IA.',
        topics: ['AI', 'Empresa', 'Digital Transformação Digital'],
        day: 1
    },
    {
        id: 2,
        title: 'Escalonamento da arquitetura de microsprocessadores',
        speaker: 'Michael Rodriguez',
        date: '2025-03-15',
        time: '11:00',
        city: 'Lisboa',
        venue: 'Inovatech Lisboa, Av. da Liberdade 110',
        description: 'Aprenda as melhores práticas para dimensionar a arquitetura de microsserviços em grandes empresas, incluindo estudos de caso do mundo real e soluções práticas.',
        topics: ['Microsserviços', 'Arquitetura', 'Escalabilidade'],
        day: 1
    }
    // Add more conference sessions as needed
];

function renderSchedule(day) {
    const scheduleGrid = document.querySelector('.schedule-grid');
    if (!scheduleGrid) return;

    const dayConferences = conferences.filter(conf => conf.day === day);

    scheduleGrid.innerHTML = dayConferences.map(conf => `
        <div class="conference-card">
            <h3>${conf.title}</h3>
            <p><strong>Data:</strong> ${formatDate(conf.date)} - ${conf.time}</p>
            <p><strong>Cidade:</strong> ${conf.city}</p>
            <button class="btn-expand">Ver mais</button>
            <div class="conference-details hidden">
                <p><strong>Descrição:</strong> ${conf.description}</p>
                <p><strong>Local:</strong> ${conf.venue}</p>
                <p><strong>Palestrante:</strong> ${conf.speaker}</p>
                <p><strong>Tópicos:</strong> ${conf.topics.join(', ')}</p>
                <a href="conferencia_detalhes.php?id=${conf.id}" class="btn-primary">Baixar PDF</a>
            </div>
        </div>
    `).join('');

    // Adicionar manipuladores de eventos para o botão "Ver mais"
    document.querySelectorAll('.conference-card .btn-expand').forEach(btn => {
        const details = btn.closest('.conference-card').querySelector('.conference-details');
        btn.addEventListener('click', () => {
            details.classList.toggle('hidden');
            btn.textContent = details.classList.contains('hidden') ? 'Ver mais' : 'Ver menos';
        });
    });
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('pt-PT', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// DOM Elements
const speakersGrid = document.querySelector('.speakers-grid');
const scheduleTabs = document.querySelector('.schedule-tabs');
const scheduleContent = document.querySelector('.schedule-content');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Mobile Menu Toggle
mobileMenuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('show');
});

// Render Speakers
function renderSpeakers() {
    if (!speakersGrid) return;
    
    speakersGrid.innerHTML = speakers.map(speaker => `
        <div class="speaker-card">
            <img src="${speaker.image}" alt="${speaker.name}">
            <div class="speaker-info">
                <h3>${speaker.name}</h3>
                <p>${speaker.role}</p>
                <p>${speaker.company}</p>
                <p class="topic">${speaker.topic}</p>
            </div>
        </div>
    `).join('');
}

// Renderiza a programação do dia selecionado
function renderSchedule(day) {
    const scheduleGrid = document.querySelector('.schedule-grid');
    if (!scheduleGrid) return;

    // Filtra as conferências do dia específico
    const dayConferences = conferences.filter(conf => conf.day === day);

    // Gera o HTML para cada conferência
    scheduleGrid.innerHTML = dayConferences.map(conf => `
        <div class="conference-card">
            <div class="conference-header">
                <h3>${conf.title}</h3>
                <p><strong>Data:</strong> ${formatDate(conf.date)} - ${conf.time}</p>
                <p><strong>Cidade:</strong> ${conf.city}</p>
                <button class="btn-expand">Ver mais</button>
            </div>
            <div class="conference-details hidden">
                <p><strong>Descrição:</strong> ${conf.description}</p>
                <p><strong>Local:</strong> ${conf.venue}</p>
                <p><strong>Palestrante:</strong> ${conf.speaker}</p>
                <p><strong>Tópicos:</strong> ${conf.topics.join(', ')}</p>
                <a href="conferencia_detalhes.php?id=${conf.id}" class="btn-primary">Baixar PDF</a>
            </div>
        </div>
    `).join('');

    // Adiciona manipuladores de eventos para os botões "Ver mais"
    document.querySelectorAll('.conference-card .btn-expand').forEach(button => {
        const details = button.closest('.conference-card').querySelector('.conference-details');
        button.addEventListener('click', () => {
            details.classList.toggle('hidden');
            button.textContent = details.classList.contains('hidden') ? 'Ver mais' : 'Ver menos';
        });
    });
}

// Formata a data para exibição
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('pt-PT', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Manipula a seleção dos tabs de dias
document.addEventListener('DOMContentLoaded', () => {
    const scheduleTabs = document.querySelector('.schedule-tabs');
    if (scheduleTabs) {
        scheduleTabs.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('tab')) {
                document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                target.classList.add('active');
                renderSchedule(parseInt(target.dataset.day));
            }
        });
    }

    // Renderiza o primeiro dia ao carregar a página
    renderSchedule(1);
});

// Travel Planning Feature
const travelData = {
    flights: {
        'UK': [
            { from: 'London', to: 'Porto', duration: '2h 30m', price: '€150', airline: 'TAP Portugal' },
            { from: 'London', to: 'Lisbon', duration: '2h 45m', price: '€180', airline: 'British Airways' }
        ],
        'FR': [
            { from: 'Paris', to: 'Porto', duration: '2h 15m', price: '€130', airline: 'Air France' },
            { from: 'Paris', to: 'Lisbon', duration: '2h 30m', price: '€160', airline: 'TAP Portugal' }
        ],
        // Add more flight options for other countries
    },
    accommodation: [
        { name: 'Conference Hotel', type: 'Hotel', price: '€120/night', distance: '5 min walk' },
        { name: 'City Center Hotel', type: 'Hotel', price: '€100/night', distance: '15 min by metro' },
        { name: 'Boutique Guesthouse', type: 'Guesthouse', price: '€80/night', distance: '10 min walk' }
    ],
    transport: [
        { type: 'Metro', price: '€1.50/trip', duration: 'Every 5 minutes' },
        { type: 'Taxi', price: '€10-15', duration: '15 minutes' },
        { type: 'Conference Shuttle', price: 'Free', duration: 'Every 30 minutes' }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const originCountry = document.getElementById('origin-country');
    const arrivalDate = document.getElementById('arrival-date');
    const departureDate = document.getElementById('departure-date');
    const planTripBtn = document.getElementById('plan-trip');
    const travelResults = document.getElementById('travel-results');

    if (!originCountry || !arrivalDate || !departureDate || !planTripBtn || !travelResults) return;

    planTripBtn.addEventListener('click', function() {
        const country = originCountry.value;
        if (!country) {
            alert('Please select your country');
            return;
        }

        // Show travel sections
        document.querySelectorAll('.travel-step').forEach(step => {
            step.classList.remove('hidden');
        });

        // Render flight options
        const flightContainer = document.querySelector('.flight .options-container');
        if (flightContainer && travelData.flights[country]) {
            flightContainer.innerHTML = travelData.flights[country].map(flight => `
                <div class="travel-option">
                    <div>
                        <strong>${flight.from} → ${flight.to}</strong>
                        <p>${flight.airline} - ${flight.duration}</p>
                    </div>
                    <div>
                        <strong>${flight.price}</strong>
                    </div>
                </div>
            `).join('');
        }

        // Render accommodation options
        const accommodationContainer = document.querySelector('.accommodation .options-container');
        if (accommodationContainer) {
            accommodationContainer.innerHTML = travelData.accommodation.map(hotel => `
                <div class="travel-option">
                    <div>
                        <strong>${hotel.name}</strong>
                        <p>${hotel.type} - ${hotel.distance}</p>
                    </div>
                    <div>
                        <strong>${hotel.price}</strong>
                    </div>
                </div>
            `).join('');
        }

        // Render transport options
        const transportContainer = document.querySelector('.local-transport .options-container');
        if (transportContainer) {
            transportContainer.innerHTML = travelData.transport.map(transport => `
                <div class="travel-option">
                    <div>
                        <strong>${transport.type}</strong>
                        <p>${transport.duration}</p>
                    </div>
                    <div>
                        <strong>${transport.price}</strong>
                    </div>
                </div>
            `).join('');
        }

        // Show map section
        document.querySelector('.travel-map').classList.remove('hidden');
    });

    // Make options selectable
    document.querySelectorAll('.options-container').forEach(container => {
        container.addEventListener('click', function(e) {
            const option = e.target.closest('.travel-option');
            if (option) {
                // Remove selection from siblings
                option.parentElement.querySelectorAll('.travel-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // Add selection to clicked option
                option.classList.add('selected');
            }
        });
    });
});


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSpeakers();
    renderSchedule(1);
});

function isLoggedIn() {
    // Implemente a lógica para verificar se o usuário está logado
    // Exemplo: return !!localStorage.getItem('userToken');
    return false; // Altere para true se o usuário estiver logado
}

function getUserInfo() {
    // Implemente a lógica para obter as informações do usuário
    // Exemplo: return JSON.parse(localStorage.getItem('userInfo'));
    return {
        name: 'João Silva',
        avatar: 'path/to/user-avatar.jpg'
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const profileAvatar = document.getElementById('profile-avatar');
    const profileName = document.getElementById('profile-name');

    if (isLoggedIn()) {
        const userInfo = getUserInfo();
        profileAvatar.src = userInfo.avatar;
        profileName.textContent = userInfo.name;
    } else {
        profileName.textContent = 'Login';
    }

    // Adicione um evento de clique para redirecionar para a página de login
    document.querySelector('.profile-container').addEventListener('click', () => {
        if (!isLoggedIn()) {
            window.location.href = 'login.html'; // Redirecione para a página de login
        }
    });
});

function loadConferences() {
    const conferenceSelect = document.getElementById('conference-select');
    if (!conferenceSelect) return;

    // Suponha que `conferences` é um array de objetos contendo informações das conferências
    const conferences = [
        { id: 1, title: 'The Future of AI in Enterprise', date: '2025-03-15', city: 'Lisboa' },
        { id: 2, title: 'Scaling Microservices Architecture', date: '2025-03-15', city: 'Lisboa' },
        // Adicione mais conferências conforme necessário
    ];

    conferences.forEach(conference => {
        const option = document.createElement('option');
        option.value = conference.id;
        option.textContent = `${conference.title} - ${conference.city} (${conference.date})`;
        conferenceSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadConferences();
});


