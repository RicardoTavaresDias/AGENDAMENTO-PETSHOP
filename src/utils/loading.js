import { main } from "../modules/load.js"
import { form } from "../modules/form/submit.js"


//ANIMAÇÃO CARREGAMENTO
export function loadingServe() {
  const figure = document.querySelector("figure")

  figure.classList.remove("display")
  main.classList.add("screenn")
  form.classList.add("screen")
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
}

//CLOSE ANIMAÇÃO CARREGAMENTO
export function closeLoadingServe() {
  const figure = document.querySelector("figure")
  
  figure.classList.add("display")
  main.classList.remove("screenn")
  form.classList.remove("screen")
}