document.getElementById("btn-burger").addEventListener("click", function (){
   document.getElementById("navbar").classList.toggle("open");
});

const menuLinks = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function (){
        document.getElementById("navbar").classList.toggle("open");
    });
}