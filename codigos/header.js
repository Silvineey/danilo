const menu=document.getElementById("menu")
const submenu=document.querySelector(".submenu")
menu.addEventListener("click",()=>{
    submenu.classList.toggle("on")
})