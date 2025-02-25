import dayjs from "dayjs" 

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow({ dailySchedules }) {
  try {
    //limpa as listas
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    //renderiza os agendamentos por periodo  
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      //adiciona id do agendamento
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      //cria o icone de cancelar agendamento
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "../../src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar agendamento")

      //adiciona o tempo, nome e icone no item
      item.append(time, name, cancelIcon)

      //obtem somente a hora
      const hour = dayjs(schedule.when).hour()

      //renderiza o agendamento na sessao correta (manha, tarde ou noite)
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    });



  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}