const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnIqz = document.querySelector("#btn-izq");
const btnDrch = document.querySelector("#btn-drch");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500)
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500)
}

btnDrch.addEventListener('click', function(){
    Next();
});

btnIqz.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 10000);

const inicioBtn = document.querySelector("#loginBtn");
const regisBtn = document.querySelector("#registerBtn");
const confirmBtn = document.querySelector(".button-confirm");

const formL = document.querySelector(".container");
const formR = document.querySelector(".container2");

const sesion = () => {
    inicioBtn.style.display = "none";
    regisBtn.style.display = "none";
    formL.style.display = "block";
    formL.style.bottom = "40px";
    formL.style.width = "450px";
    formL.style.marginLeft = "0px";
    formL.style.borderRadius = "20px";
    formR.style.display = "none";
}

inicioBtn.addEventListener("click", sesion);

const regis = () => {
    inicioBtn.style.display = "none";
    regisBtn.style.display = "none";
    formR.style.display = "block";
    formR.style.bottom = "0px";
    formR.style.width = "450px";
    formR.style.marginLeft = "0px";
    formR.style.borderRadius = "20px";
    formL.style.display = "none";
}

regisBtn.addEventListener("click", regis);

const back = () => {
    inicioBtn.style.display = "block";
    regisBtn.style.display = "block";
    formL.style.display = "none";
    formR.style.display = "none";
}

confirmBtn.addEventListener("click", back);

let sections = document.getElementsByName('sct')
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

















/*document.addEventListener("DOMContentLoaded", function(){

    const slider = document.querySelector('.slider');
    let counter = 1;

    setInterval(()=>{
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-counter * 100}%)`;
        counter++;

        if(counter === slider.children.length){
            setTimeout(()=>{
                slider.style.transition = "none";
                slider.style.transform = 'traslateX(0)';
                counter = 0;
            },500)
        }
    },3000)

});*/
