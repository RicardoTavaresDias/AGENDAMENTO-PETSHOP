import dayjs from "dayjs"
import { scheduling } from "../modules/form/scheduling.js"

const button = document.getElementById("newSchedule")
const main = document.querySelector("main")
const aside = document.querySelector("aside")
const datePage = document.getElementById("date")
const dateForm = document.getElementById("dateForm")

const datehoje = dayjs().format("YYYY-MM-DD")
datePage.value = datehoje
dateForm.value = datehoje
dateForm.setAttribute("min", datehoje)
datePage.setAttribute("min", datehoje)

button.addEventListener("click", () => {
  main.classList.add("screen")
  button.classList.add("display")
  aside.classList.remove("display")
  window.scrollTo({
      top: 0,
      behavior: 'auto'
  })
})

scheduling(datePage.value)


// //CARREGAMENTO DA PAGINA.
// document.addEventListener("DOMContentLoaded", () => {
   
   
//   // for (let i=hoursDate.length - 1; i >= 0; i--) {
//   //   const option = document.createElement("option")
//   //   option.value = `${hoursDate[i]}`
//   //   option.textContent = `${hoursDate[i]}`
//   //   datehour.prepend(option)
//   // }
//   //console.log(datehour)
// })


export { aside, main, button }

