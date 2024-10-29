
const esquerda = document.querySelector("#left")
const direita = document.querySelector("#right")
const about = document.querySelector("#about")
const habilidades = document.querySelector("#skills")

esquerda.addEventListener("click", ()=>{
  if(about.classList.contains("active")){
    habilidades.classList.add("active")
    about.classList.remove("active")
    
  }
  else {
    habilidades.classList.remove("active")
    about.classList.add("active")
  }
})

direita.addEventListener("click", ()=>{
  if(about.classList.contains("active")){
    habilidades.classList.add("active")
    about.classList.remove("active")
    
  }
  else {
    habilidades.classList.remove("active")
    about.classList.add("active")
  }
})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}