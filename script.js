// Seleciona o botão de alternar tema
const themeBtn = document.getElementById('toggle-theme');
const icon = themeBtn.querySelector('i');

// Adiciona um evento de clique no botão
themeBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-theme' no <body> da página
    document.body.classList.toggle('dark-theme');

    // Troca o ícone de Lua para Sol e vice-versa
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});