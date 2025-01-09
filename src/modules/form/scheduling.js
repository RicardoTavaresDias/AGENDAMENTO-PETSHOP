import { get } from "../../server/get.js"
const date = document.getElementById("date")
const dateFormm = document.querySelector("#hour")

export function scheduling(value) {
  const teste = value
  const hour = value[0]

  const hours = hour.split(":")[0]
      if (Number(hours) < 12) {
        createElement(value, "morning")
      } else if (Number(hours) >= 12 && Number(hours) < 18) {
        createElement(value, "afternoon")
      }else {
        createElement(value, "night")
      }
}


function createElement(value, element) { 
  const divcontainerHours = document.createElement("div")
  const divhours = document.createElement("div")
  const divhour = document.createElement("div")
  const spanhour = document.createElement("span")

  const divusers = document.createElement("div")
  const spanusers = document.createElement("span")
  const p = document.createElement("p")

  const divservice = document.createElement("div")
  const spanservice = document.createElement("span")

  const divclose = document.createElement("div")
  const a = document.createElement("a")

  const [hour, name, namepet, service] = value

  // Div hours
  divhours.classList.add("hours")
  divhour.classList.add("hour")
  spanhour.textContent = hour
  divhour.append(spanhour)

  // Div users
  divusers.classList.add("users")
  spanusers.textContent = namepet
  p.textContent = "/ " + name
  divusers.append(spanusers, p)

  divhours.append(divhour, divusers)

  // Div service
  divservice.classList.add("service")
  spanservice.textContent = service

  divservice.append(spanservice)

  // Div close
  divclose.classList.add("close")
  a.setAttribute("href", "#")
  a.textContent = "Remover agendamento"

  divclose.append(a)

  divcontainerHours.classList.add("containerHours")
  divcontainerHours.append(divhours, divservice, divclose)

  document.querySelector(`.${element}`).append(divcontainerHours)
}

document.getElementById("date").addEventListener("change", () => {
  const removeDOM = document.querySelectorAll(".containerHours")
  removeDOM.forEach(element => element.remove())
  get(date.value)
})

