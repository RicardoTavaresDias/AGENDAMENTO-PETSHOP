import { port } from "./api_config"
import { scheduling } from "../modules/form/scheduling.js"
import { loadingServe, closeLoadingServe } from "../utils/loading.js"
import { alertError } from "../utils/alert.js"

export async function get(value) {
  try {
      const get = await fetch(`${port}`)
      const data = await get.json()
      
      data.forEach(async (item) => {
        if (item.date === value){
          await loadingServe()
          // PASSAR PARA PAGINA PRINCIPAL
          scheduling([item.hour, item.name, item.namepet, item.service])
        }
      })
      setTimeout(async () => {
        await closeLoadingServe()
      }, 300)
        
  } catch (error) {
      console.log(error)
      alertError("Não foi possivel carregar, tente mais tarde!")
  }
}






