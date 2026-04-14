CSS.registerProperty({
    name: "--creada-con-javascript",
    syntax: "<color>",
    inherits: true,
    initialValue: "seagreen",
});

// Funcionalidad del botón de la card
const cardBtn = document.querySelector('.card__btn');
const card = document.querySelector('.card');

cardBtn.addEventListener('click', () => {
    // Cambiar el color del botón aleatoriamente
    const colores = ['royalblue', 'seagreen', 'tomato', 'purple', 'orange', 'crimson'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    document.documentElement.style.setProperty('--color-botones', colorAleatorio);

    // Añadir animación a la card
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s';

    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 300);
});