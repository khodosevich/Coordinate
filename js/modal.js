const openModal = document.querySelectorAll(".contact-us");
const closeModal = document.getElementById("close");


for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function (){
        document.getElementById("modal").classList.add("open");
    });
}

closeModal.addEventListener("click", function (){
    document.getElementById("modal").classList.remove("open");
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById("modal").classList.remove("open");
    }
});


//-----login-modal------------

const loginModal = document.getElementById("login");
const loginClose = document.getElementById("loginClose");

loginModal.addEventListener("click", function (){
   document.querySelector(".modalLogin") .classList.add('open');
});

loginClose.addEventListener("click", function (){
    document.querySelector(".modalLogin") .classList.remove('open');
});



document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelector(".modalLogin") .classList.remove('open');
    }
});

//---------learn-modal----------------


const learnModal = document.getElementById("learnBtn");
const learnClose = document.getElementById("learnClose");

learnModal.addEventListener("click", function (){
    document.querySelector(".learnModal") .classList.add('open');
});

learnClose.addEventListener("click", function (){
    document.querySelector(".learnModal") .classList.remove('open');
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelector(".learnModal") .classList.remove('open');
    }
});

