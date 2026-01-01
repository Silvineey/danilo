const caixas=document.querySelectorAll(".caixapreta")
caixas.forEach(caixa=>{
    caixa.addEventListener("click",(e)=>{
        const alvo=e.currentTarget.dataset.galeria
        if(alvo){
            window.location.href=`paginas/portfolios/${alvo}.html`
        }
    })
})