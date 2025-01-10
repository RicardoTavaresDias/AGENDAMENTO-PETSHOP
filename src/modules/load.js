import dayjs from "dayjs"
import { scheduling } from "../modules/form/scheduling.js"
import { get } from "../server/get.js"
import { hoursDate } from "../utils/hours.js"

const button = document.getElementById("newSchedule")
const main = document.querySelector("main")
const aside = document.querySelector("aside")
const datePage = document.getElementById("date")
const dateForm = document.getElementById("dateForm")
const datehour = document.getElementById("hour")

export const datehoje = dayjs().format("YYYY-MM-DD")
datePage.value = datehoje
dateForm.value = datehoje
dateForm.setAttribute("min", datehoje)
datePage.setAttribute("min", datehoje)

// EVENTO PARA ABRIR O FORMULARIO
button.addEventListener("click", () => {
  main.classList.add("screen")
  button.classList.add("display")
  aside.classList.remove("display")
  window.scrollTo({
      top: 0,
      behavior: 'auto'
  })
})

// EVENTO VALIDAÇÃO DA DATA ATUAL E HORARIO NO INPUT SELECT
export async function update(value) {
  datehour.innerHTML = ""
  const element = await get(value)
  const array = []
  let arrayhour = hoursDate.slice()
  
  // element.forEach(event => {
  //   if (event.date === datePage.value) {
  //     array.push(event.hour)
  //   }
  // });

  // //PAREI AQUI
  // array.forEach(element => {
  //   arrayhour = arrayhour.filter(num => num !== element)
  //   arrayhour = arrayhour.filter(min => min > dayjs().format("HH:mm"))
  // })

  console.log(hoursDate)
  for (let i = 0; hoursDate.length > i; i++){
      const option = document.createElement("option")
      option.value = hoursDate[i]
      option.textContent = hoursDate[i]
      datehour.prepend(option)      
  }
}

// CARREGAMENTO DA PAGINA, ATUALIZA
export function toLoad(){
  const removeDOM = document.querySelectorAll(".containerHours")
  removeDOM.forEach(element => element.remove())

  scheduling(datePage.value)
  update(datePage.value)
}


scheduling(datePage.value)
update(datePage)

export { aside, main, button }
