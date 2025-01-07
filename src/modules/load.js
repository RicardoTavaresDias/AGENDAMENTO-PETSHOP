import dayjs from "dayjs"

const main = document.querySelector("main")
const aside = document.querySelector("aside")
const form = document.querySelector("form")
const button = document.getElementById("newSchedule")

const datePage = document.getElementById("date")
const dateForm = document.getElementById("dateForm")

const datehoje = dayjs().format("YYYY-MM-DD")
datePage.value = datehoje
dateForm.value = datehoje

button.addEventListener("click", () => {
  main.classList.add("screen")
  button.classList.add("display")
  aside.classList.remove("display")
  window.scrollTo({
      top: 0,
      behavior: 'auto'
  })
})

document.getElementById("schedule").addEventListener("click", (evento) => {
  evento.preventDefault()
  main.classList.remove("screen")
  button.classList.remove("display")
  aside.classList.add("display")
})


export { form, aside, main, button }

