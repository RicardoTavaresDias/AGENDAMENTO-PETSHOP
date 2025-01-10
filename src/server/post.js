import { port } from "./api_config.js"
import { loadingServe, closeLoadingServe } from "../utils/loading.js"
import { alertError, alertCheck } from "../utils/alert.js"
import { toLoad } from "../modules/load.js"

 export async function post(value) {
  try {
    loadingServe()
    await fetch(port, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          id: String(new Date().getTime()), 
          name: value.name,
          namepet: value.pet,
          phone: value.phone,
          service: value.service,
          date: value.date,
          hour: value.hour
        }
      )
    })
    await setTimeout(function () {
      closeLoadingServe()
      toLoad()
      alertCheck(`${value.name} e ${value.pet}, Cadastrado com sucesso!`)
    }, 500)
  } catch (error) {
    closeLoadingServe()
    console.log(error)
    alertError("Erro ao cadastrar, tente novamente!")
  }
}




