import dayjs from "dayjs"
import { scheduling } from "../modules/form/scheduling.js"
import { get } from "../server/get.js"
import { hoursDate } from "../utils/hours.js"

const button = document.getElementById("newSchedule")
const main = document.querySelector("main")
const aside = document.querySelector("aside")
const datePage = document.getElementById("date")
export const dateForm = document.getElementById("dateForm")
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
  const data = await get(`date=${value}`)

      let filter = []

      data.forEach(event => {
        filter.push(event.hour)
      })    

      filter = hoursDate.filter(
        event => !filter.includes(event))
        
      const hourCurrent = filter.filter(
        value => value > dayjs().format("HH:mm"))
     
      if (dateForm.value && datePage.value === datehoje){
          for (let i = 0; hourCurrent.length > i; i++){
            const option = document.createElement("option")
            option.value = hourCurrent[i]
            option.textContent = hourCurrent[i]
            datehour.prepend(option)      
          }
          console.log(hourCurrent)
      } else {
          for (let i = 0; filter.length > i; i++){
            const option = document.createElement("option")
            option.value = filter[i]
            option.textContent = filter[i]
            datehour.prepend(option)      
          }
          console.log(filter)
      }
}

//EVENTO DA MUDANÇA DE DATA NO FORMULARIO
dateForm.addEventListener("change", () => {
  update(dateForm.value)
})

datePage.addEventListener("change", () => {
  dateForm.value = datePage.value
})

// CARREGAMENTO DA PAGINA, ATUALIZA
export function toLoad(){
  const removeDOM = document.querySelectorAll(".containerHours")
  removeDOM.forEach(element => element.remove())

  scheduling(datePage.value)
  update(datePage.value)
}


scheduling(datePage.value)
update(datePage.value)

export { aside, main, button }
