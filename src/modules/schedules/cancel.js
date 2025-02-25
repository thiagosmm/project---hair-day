const periods = document.querySelectorAll(".period")

//gerar evento de clique para cada lista

periods.forEach((period) => {
  period.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //obtem li pai do evento clicado
      const item = event.target.closest("li")
      const { id } = item.dataset

      if(id) {
        const isConfirmed = confirm("Deseja realmente cancelar o agendamento?")
        if(isConfirmed) {
          //chama a funcao de cancelamento

        }
      }

    }
  })
})