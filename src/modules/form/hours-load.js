import dayjs from "dayjs"
import { openingHours} from "../../utils/opening-hours.js";

export function hoursLoad({ date }) {
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
}