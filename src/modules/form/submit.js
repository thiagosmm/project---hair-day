import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date")

//data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
//carrega data atual e minima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //recuperando nome do cliente
    const name = clientName.value.trim()
    if(!name) {
      return alert("Nome do cliente é obrigatório")
    }
    //recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected) {
      return alert("Selecione um horário")
    }

    const [hour] = hourSelected.textContent.split(":")
    const when = dayjs(selectedDate.value).add(hour, "hour")
    console.log(when)
    //gera id aleatorio
    const id = new Date().getTime()

    await scheduleNew({ id, name, when })

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error.message)
  }  

}