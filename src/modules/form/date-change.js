import { schedulesDay } from "../schedules/load.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

//recarrega lista de horarios quando o input de data mudar

selectedDate.onchange = () => schedulesDay()