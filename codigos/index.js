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
const submenu=document.querySelector(".submenu")
const menu=document.getElementById("menu")
menu.addEventListener("click",()=>{
    console.log(submenu)
    submenu.classList.toggle("off")
    submenu.classList.toggle("on")
})


const capas = document.querySelectorAll(".slidem");
let ativo = 0;
setInterval(passar, 5000);
function passar() {
    capas[ativo].classList.remove("on");
    capas[ativo].classList.add("off");
    ativo=ativo+1
    if(ativo==capas.length){
        ativo=0
    }
    capas[ativo].classList.remove("off");
    capas[ativo].classList.add("on");
}