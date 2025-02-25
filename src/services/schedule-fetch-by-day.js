import { dayjs } from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  try {
    //fazendo requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)
    //converte para json
    const data = await response.json()
    //filtra os agendamebntos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules

  } catch (error) {
    console.log(error)
    alert("Não foi possível carregar os agendamentos do dia selecionado")
  }
}