const botoes = document.querySelectorAll(".slide p");
const slides = document.querySelectorAll(".backgroundmain");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const alvo = botao.dataset.slide;
        const url = `assets/${alvo}.jpg`;

        slides.forEach(slide => {
            slide.classList.remove("on");
            slide.classList.add("off");
            if (slide.dataset.slide === alvo) {
                slide.classList.remove("off");
                slide.classList.add("on");
                const capa = slide.querySelector(".capa");
                capa.style.backgroundImage = `url("${url}")`;
            }
        });
    });
});

function render(){
    const caixa=document.getElementById("saida")
    for(let i=1;i<12;i++){
        const img=document.createElement("img")
        img.src=`./assets/p${i}.png`
        caixa.appendChild(img)

    }
}

document.addEventListener("DOMContentLoaded",render)
