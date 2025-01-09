import { aside, button, main } from "../modules/load.js"

const span = document.querySelector(".mensage")
const imgAlert = document.querySelector("article div img")
const div = document.querySelector(".alertcenter")
const article = document.querySelector("article")
const alert = document.querySelector(".alertcenter")
const buttonSchedule = document.querySelector("#schedule")

export function alertExclamation(value) {
  div.classList.remove("display")
  article.classList.add("exclamationBorder")
  imgAlert.setAttribute("src", "./src/assets/icon/circle-exclamation.svg")
  span.textContent = value
  backgroundScreen()
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
}

export function alertCheck(value) {
  div.classList.remove("display")
  article.classList.add("checkBorder")
  imgAlert.setAttribute("src", "./src/assets/icon/check.svg")
  span.textContent = value
  backgroundScreen()
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
}

export function alertError(value) {
  div.classList.remove("display")
  article.classList.add("errorBorder")
  imgAlert.setAttribute("src", "./src/assets/icon/error.svg")
  span.textContent = value
  backgroundScreen()
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
}

//FUNDO DO CONTEUDO
function backgroundScreen() {
  button.classList.add("display")
  main.classList.add("screen")
  aside.classList.add("screen")

  buttonSchedule.disabled = true
}


// FECHA O ALERT
document.querySelector("#closeInf").addEventListener("click", () => {
  alert.classList.add("display")
  article.classList.remove("errorBorder")
  article.classList.remove("checkBorder")
  article.classList.remove("exclamationBorder")

  button.classList.remove("display")
  main.classList.remove("screen")
  aside.classList.remove("screen") 
  buttonSchedule.disabled = false
})




//TESTES

// setTimeout(function(){
// //PARA USO DA EXPORT, NO ALERT...
// //alertExclamation("ipsis litterisipsis litterisipsis litteris")
// //alertCheck("ipsis litterisipsis litterisipsis litteris")
// //alertError("ipsis litterisipsis litterisipsis litteris")
// }, 3000)



 