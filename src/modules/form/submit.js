import { post } from "../../server/post.js"
import { aside, button, main } from "../load.js"
import { value } from "./validField.js"

const name = document.getElementById("name")
const namePet = document.getElementById("namepet")
const phone = document.getElementById("phone")
const service = document.getElementById("service")
const dateForm = document.getElementById("dateForm")
const hour = document.getElementById("hour")
const buttonSchedule = document.getElementById("schedule")
const form = document.querySelector("form")

form.addEventListener("submit", (even) => {
  even.preventDefault()
  
  try {
    if (value(name) && value(namePet) && value(phone) && value(service)) {
      if (String(phone.value).length === 13 || String(phone.value).length === 14) {
          
         post({
          name: name.value, 
          pet : namePet.value,
          phone: phone.value,
          service: service.value,
          date: dateForm.value,
          hour: hour.value
        })

        name.value = ""
        namePet.value = ""
        phone.value = ""
        service.value = ""

      }
        main.classList.remove("screen")
        button.classList.remove("display")
        aside.classList.add("display")
    }
  } catch (error) {
    console.log(error)
    alert(error)
  }
})

export { main, aside, button, form }

