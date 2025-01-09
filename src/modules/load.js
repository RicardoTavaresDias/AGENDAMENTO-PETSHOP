import dayjs from "dayjs"

const button = document.getElementById("newSchedule")
const main = document.querySelector("main")
const aside = document.querySelector("aside")
const datePage = document.getElementById("date")
const dateForm = document.getElementById("dateForm")

const datehoje = dayjs().format("YYYY-MM-DD")
datePage.value = datehoje
dateForm.value = datehoje
dateForm.setAttribute("min", datehoje)

button.addEventListener("click", () => {
  main.classList.add("screen")
  button.classList.add("display")
  aside.classList.remove("display")
  window.scrollTo({
      top: 0,
      behavior: 'auto'
  })
})

//CARREGAMENTO DA PAGINA.
document.addEventListener("DOMContentLoaded", () => {
  console.log("OLA ESTOU CARREGADO!")
})


export { aside, main, button }

