import { aside} from "./load.js"
import  { pages, closePages }  from "./loading.js"

const article = document.createElement("article")
const div = document.createElement("div")
const img = document.createElement("img")
const img2 = document.createElement("img")
const span = document.createElement("span")

export function alertExclamation(value) {
  pages()
  aside.classList.add("center")

  img.setAttribute("src", "./src/assets/icon/circle-exclamation.svg")
  img2.setAttribute("src", "./src/assets/icon/close.svg")
  img2.id = "closeInf"
  span.textContent = value
  
  div.append(img, span)
  article.classList.add("exclamationBorder")
  article.append(div, img2)
  aside.append(article)

  document.querySelector("#closeInf").addEventListener("click", () => {
    closeInfo()
    closePages()
    article.remove()
  })
}


export function alertCheck(value) {
  pages()
  aside.classList.add("center")

  img.setAttribute("src", "./src/assets/icon/check.svg")
  img2.setAttribute("src", "./src/assets/icon/close.svg")
  img2.id = "closeInf"
  span.textContent = value
  
  div.append(img, span)
  article.classList.add("checkBorder")
  article.append(div, img2)
  aside.append(article)

  document.querySelector("#closeInf").addEventListener("click", () => {
    closeInfo()
    closePages()
    article.remove()
  })
}



export function alertError(value, border) {
  pages()
  aside.classList.add("center")

  img.setAttribute("src", "./src/assets/icon/error.svg")
  img2.setAttribute("src", "./src/assets/icon/close.svg")
  img2.id = "closeInf"
  span.textContent = value
  
  div.append(img, span)
  article.classList.add("errorBorder")
  article.append(div, img2)
  aside.append(article)

  document.querySelector("#closeInf").addEventListener("click", () => {
    closeInfo()
    closePages()
    article.remove()
  })
}


function closeInfo() {
  document.querySelector("aside div").classList.remove("display")
  aside.classList.remove("center")
}



//PARA USO DA EXPORT, NO ALERT...
//alertExclamation("ERROR test")
//alertCheck("ERROR test")
//alertError("ERROR test")


 