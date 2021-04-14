const navMenu = document.getElementById("nav-menu"),
toggleMenu = document.getElementById("nav-toggle"),
closeMenu = document.getElementById("nav-close")

toggleMenu.addEventListener ("click",()=>{
navMenu.classList.toggle("show")
})
/*----------hidden-------*/
closeMenu.addEventListener ("click",()=>{
    navMenu.classList.remove("show")
    })
/*------------remove menu--------*/
const navlink = document.querySelectorAll(".nav__link")
 
function linkAction(){
navMenu.classList.remove("show")}

navlink.forEach(n => n.addEventListener("click",linkAction))






 



