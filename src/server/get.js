import { port } from "./api_config"
import { alertError } from "../utils/alert.js"

export async function get(value) {
  try {
      const get = await fetch(`${port}`)
      const data = await get.json()
     
      return data 

  } catch (error) {
      console.log(error)
      alertError("Não foi possivel carregar, tente mais tarde!")
  }
}





