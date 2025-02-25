import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//gerar evento de clique para cada lista

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //obtem li pai do evento clicado
      const item = event.target.closest("li")

      //pega o id do elemento a remover
      const { id } = item.dataset

      //confirma que o id foi selecionado
      if(id) {
        //confirma se o usuario quer remover
        const isConfirmed = confirm("Deseja realmente cancelar o agendamento?")
        if(isConfirmed) {
          //requisicao para funcao de cancelamento
          await scheduleCancel({ id })

          //recarrega os agendamentos
          schedulesDay()
        }
      }

    }
  })
})