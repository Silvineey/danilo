function render() {
    const caixa = document.getElementById("saida");
    for (let i = 1; i <= 12; i++) {
        const img = document.createElement("img");
        img.dataset.galeria = i;
        img.classList.add("botoes");
        img.src = `./assets/p${i}.png`;
        caixa.appendChild(img);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    render();

    const botoesAbrir = document.querySelectorAll(".botoes");
    const galerias = document.querySelectorAll(".galeriahidden");

    galerias.forEach((galeria) => {
        const slides = galeria.querySelectorAll(".slider");
        const btnNext = galeria.querySelector(".nextbtn");
        const btnPrev = galeria.querySelector(".prevbtn");
        let slideAtivo = 0;

        function atualizar() {
            slides.forEach((img, index) => {
                img.classList.remove("on", "off");
                img.classList.add(index === slideAtivo ? "on" : "off");
            });
        }

        btnNext?.addEventListener("click", (e) => {
            e.stopPropagation();
            slideAtivo = (slideAtivo + 1) % slides.length;
            atualizar();
        });

        btnPrev?.addEventListener("click", (e) => {
            e.stopPropagation();
            slideAtivo = (slideAtivo - 1 + slides.length) % slides.length;
            atualizar();
        });

        atualizar();
    });

    botoesAbrir.forEach(botao => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.galeria;
            const galeriaAlvo = document.querySelector(`.galeriahidden[data-galeria="${id}"]`);
            if (galeriaAlvo) {
                galeriaAlvo.classList.add("ativa");
            }
        });
    });

    galerias.forEach(g => {
        g.addEventListener("click", (e) => {
            if (e.target === g) {
                g.classList.remove("ativa");
            }
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            galerias.forEach(g => g.classList.remove("ativa"));
        }
    });
});