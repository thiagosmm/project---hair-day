import { hoursLoad } from "../form/hours-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js"

const selectedDate = document.getElementById("date")  
export async function schedulesDay() {
  //obtem data do input
  const date = selectedDate.value

  //busca agendamentos na API
  const dailySchedules = await scheduleFetchByDay({ date })

  //exibe os agendamentos
  scheduleShow({ dailySchedules })
  //renderiza as horas disponiveis
  hoursLoad({ date })
}