import { get } from "../../server/get.js"
import { del } from "../../server/delete.js"


export async function removeUser(date, hour) {
  const result = await get(date)

  const dateDay = result.filter(dday => dday.date === date)
  const hourDay = dateDay.filter(hday => hday.hour === hour)
  const id = (hourDay.find(id => id.id)).id

  del(id)  
}
