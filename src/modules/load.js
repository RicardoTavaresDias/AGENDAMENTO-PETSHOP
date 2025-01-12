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
  let filter = []
  const data = await get(`date=${value}`)

  //ADICIONA OS HORARIOS ENCONTRADO NA BASE DE DADOS
  data.forEach(event => {
    filter.push(event.hour)
  })    

  //REALIZA UM FILTRO DOS HORARIOS DA BASE DAS 9H AS 21H E SE BATER COM HORARIOS DO FILTER REMOVE.
  filter = hoursDate.filter(
    event => !filter.includes(event))

  //REALIZA FILTRO DOS HORARIOS DO FILTER COM HORARIO ATUAL E REMOVE OS HORARIOS QUE JÁ PASSOU DO DIA ATUAL
  const hourCurrent = filter.filter(
    value => value > dayjs().format("HH:mm"))
  
  if (dateForm.value === datehoje && datePage.value === datehoje){
    createElementOption(hourCurrent)
  } else {
    createElementOption(filter)
  }
}

//ADIONA O DOM PARA MOSTRAGEM DOS HORARIOS DISPONIVEL NO FORMULARIO
function createElementOption(filter) {
  for (let i = 0; filter.length > i; i++){
    const option = document.createElement("option")
    option.value = filter[i]
    option.textContent = filter[i]
    datehour.prepend(option)      
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