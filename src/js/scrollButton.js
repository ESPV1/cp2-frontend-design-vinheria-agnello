export function scrollButton() {
    const botao = document.getElementById('scrollButton');
    const alvo = document.getElementById('home');

    botao.addEventListener('click', () => {
        alvo.scrollIntoView({ behavior: 'smooth' });
    });
}