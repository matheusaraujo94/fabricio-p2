function menuOnClick() {
document.getElementById("menu-bar").classList.toggle("change");
document.getElementById("nav").classList.toggle("change");
document.getElementById("menu-bg").classList.toggle("change-bg");
}

let slideIndex = 1;
let slideInterval; // Variável para armazenar o intervalo do slideshow
  
// Inicializa o slideshow
slides(slideIndex);
startAutoSlide(); // Inicia o movimento automático dos slides
  
// Função para mudar de slide manualmente
function plusSlides(n) {
    slides(slideIndex += n);
}
  
// Função para ir para um slide específico
function currentSlide(n) {
    slides(slideIndex = n);
}
  
// Função para exibir o slide atual
function slides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}
  
// Função para iniciar a mudança automática dos slides
function startAutoSlide() {
    slideInterval = setInterval(() => {
        plusSlides(1); // Avança para o próximo slide
    }, 3000); // Altere o tempo (3000 ms = 3 segundos) se necessário
}
  
// Função para parar a mudança automática
function stopAutoSlide() {
    clearInterval(slideInterval);
}
  
// Adiciona eventos de mouse para pausar e retomar
let carrocelContainer = document.getElementById("carrocel-container");
carrocelContainer.addEventListener("mouseover", stopAutoSlide);
carrocelContainer.addEventListener("mouseout", startAutoSlide);

var coll = document.getElementsByClassName("sem_ideia");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

var coll = document.getElementsByClassName("sem_ideia");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}