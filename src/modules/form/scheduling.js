import { get } from "../../server/get.js"
const date = document.getElementById("date")

export async function scheduling(value) {
  const products = await get(value)
  console.log(value)
  products.forEach(element => { 
    const event = element.hour.split(":")[0]
    
    if(element.date === value) {
      if (Number(event) < 12) {
        createElement(
          [
            element.hour, 
            element.name, 
            element.namepet, 
            element.service
          ], "morning")
      } else if (Number(event) >= 12 && Number(event) < 18) {
        createElement(
          [
            element.hour, 
            element.name, 
            element.namepet, 
            element.service
          ], "afternoon")
      }else {
        createElement(
          [
            element.hour, 
            element.name, 
            element.namepet, 
            element.service
          ], "night")
      }

    }
  });   
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

  scheduling(date.value)
})

