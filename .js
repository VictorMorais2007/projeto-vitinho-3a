document.addEventListener("DOMContentLoaded", () => {
    // Dados dos projetos
    const projects = {
        1: {
            title: "Construção de Prédio Comercial",
            description: "Projeto de construção de um prédio comercial de 10 andares, com foco em eficiência energética e acessibilidade.",
            liveUrl: "https://example.com/projeto-1",
            codeUrl: "https://github.com/victor/projeto-1"
        },
        2: {
            title: "Reforma de Infraestrutura Urbana",
            description: "Reforma de ruas e calçadas de um bairro central, com foco em drenagem pluvial e melhorias no tráfego.",
            liveUrl: "https://example.com/projeto-2",
            codeUrl: "https://github.com/victor/projeto-2"
        },
        3: {
            title: "Ponte Sobre o Rio X",
            description: "Projeto de uma ponte de 150 metros, com tecnologias para resistir a condições climáticas extremas.",
            liveUrl: "https://example.com/projeto-3",
            codeUrl: "https://github.com/victor/projeto-3"
        }
    };

    // Abre o modal com o conteúdo do projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const projectId = card.getAttribute('data-project');
            const project = projects[projectId];

            // Atualiza o título do modal
            document.getElementById('projectModalLabel').textContent = project.title;

            // Atualiza a descrição do modal
            document.getElementById('modalContent').innerHTML = `<p>${project.description}</p>`;

            // Atualiza os links para o projeto e código
            document.getElementById('liveProject').setAttribute('href', project.liveUrl);
            document.getElementById('projectCode').setAttribute('href', project.codeUrl);
        });
    });
});
