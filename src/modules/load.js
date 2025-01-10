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
  const data = await get(`date=${value}`)
  const array = []
  let arrayhour = hoursDate.slice()
  

 

      // filtro dos horarios depois do filtro filtrohoje apos busca da data atual
      const filttrohour = []
      
      // filtro da base de dados com a data de hoje
      const filtrohoje = data.filter(env => env.date === value)

      // filtro dos horarios apos busca da data hoje
      filtrohoje.forEach(hour => {
        filttrohour.push(hour.hour)
      })
      
      //resultado com filtro completo das data disponivel data atual
      let outroFiltro = []

      // filtro para horario disponivel na data atual
      hoursDate.forEach(teste => {
        if (teste != filttrohour.filter(env => env === teste)){
          outroFiltro.push(teste)
        }
      })
      
      //filtra com horario atual, retira os horario que passou
      let filtrohorarios = outroFiltro.filter(hour => hour > dayjs().format("HH:mm"))    

      if (dateForm.value === datehoje){
          for (let i = 0; filtrohorarios.length > i; i++){
            const option = document.createElement("option")
            option.value = filtrohorarios[i]
            option.textContent = filtrohorarios[i]
            datehour.prepend(option)      
          }
      } else {
          for (let i = 0; outroFiltro.length > i; i++){
            const option = document.createElement("option")
            option.value = outroFiltro[i]
            option.textContent = outroFiltro[i]
            datehour.prepend(option)      
          }
      }
      console.log(outroFiltro)

}

dateForm.addEventListener("change", () => {
  update(dateForm.value)
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
