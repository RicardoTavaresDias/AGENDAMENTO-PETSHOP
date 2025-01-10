import { port } from "./api_config"
import { alertExclamation } from "../utils/alert.js"
import { toLoad } from "../modules/load.js"


const datePage = document.getElementById("date")

export async function del(id) {
  await fetch(port + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })

  toLoad()
  alertExclamation("Agenda deletado com sucesso!")
}
