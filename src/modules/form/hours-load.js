import dayjs from "dayjs"
import { openingHours} from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  //limpa a lista de horarios
  hours.innerHTML = ""

  const opening = openingHours.map((hour) => {
    //recupera somente a hora
    const [scheduleHour] = hour.split(":")
    
    //adiciona a hora na hora do date para verificarr se esta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    //define se o horario esta disponivel
    return {
      hour,
      available: isHourPast 
    }
  })

  //renderizar os horarios
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00"){
      hourHeaderAdd("Manhã")
    } else if(hour === "13:00"){
      hourHeaderAdd("Tarde")
    } else if(hour === "19:00"){
      hourHeaderAdd("Noite")
    }
    
    hours.appendChild(li)
  })

  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.appendChild(header)
}