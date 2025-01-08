import { form, aside, main, button } from "./load.js"

const figure = document.createElement("figure")
const div = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")

const header = document.querySelector("#header")

//ANIMAÇÃO CARREGAMENTO
export function loadingServe() {
  pages()
  aside.classList.add("loading")
  figure.append(div, div2, div3)
  aside.append(figure)
  console.log(aside)

}


//CLOSE ANIMAÇÃO CARREGAMENTO
export function closeLoadingServe() {
  figure.remove()
  aside.classList.remove("loading")
  closePages()
}



//ADICIONA NOVA PAGINA
export function pages() {
  aside.classList.remove("display")
  form.classList.add("display")
  document.querySelector("aside div").classList.add("display")
  button.classList.add("display")
  main.classList.add("screen")
}


//VALTAR A PAGINA INICIAL
export function closePages() {
  form.classList.remove("display")
  aside.classList.add("display")
  document.querySelector("aside div").classList.remove("display")
  button.classList.remove("display")
  main.classList.remove("screen")
}



//PARA USO DA EXPORT, NO CARREGAMENTO...
// loadingServe()
// closeLoadingServe()



//  setTimeout(function() {
//   loadingServe()
//   setTimeout(function() {
//     closeLoadingServe()
//   }, 3000);
// }, 3000);