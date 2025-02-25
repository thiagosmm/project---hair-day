import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
  try {
    //faz a requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, name, when}),
    })

    alert("Agendamento criado com sucesso")

  } catch (error) {
    alert("Erro ao criar agendamento")
    console.log(error)
  }
}