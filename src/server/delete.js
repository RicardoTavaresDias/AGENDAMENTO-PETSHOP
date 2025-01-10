import { port } from "./api_config"
import { alertExclamation, alertError } from "../utils/alert.js"
import { toLoad } from "../modules/load.js"
const datePage = document.getElementById("date")

//EVENTO DE EXCLUSÃO DA BASE DE DADOS COM ID
export async function del(id) {
  try {
    await fetch(port + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    alertExclamation("Agenda deletado com sucesso!")
    toLoad()
}catch (error) {
  console.log(error)
  alertError("Erro ao remover agenda, tente novamente!")
  toLoad()
}
}
