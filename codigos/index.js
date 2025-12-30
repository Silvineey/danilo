const botoes = document.querySelectorAll(".slide p");
const slides = document.querySelectorAll(".backgroundmain");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const alvo = botao.dataset.slide;
        const caminho = `${alvo}.jpg`;

        slides.forEach((slide) => {
            slide.classList.remove("on");
            slide.classList.add("off");

            if (slide.dataset.slide === alvo) {
                slide.classList.remove("off");
                slide.classList.add("on");

                const capa = slide.querySelector(".capa");
                if (capa) {
                    capa.style.backgroundImage = `url('assets/${caminho}')`;
                }
            }
        });
    });
});