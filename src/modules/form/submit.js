import dayjs from "dayjs"

const form = document.querySelector("form");
const selectedDate = document.getElementById("date")

//data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
//carrega data atual e minima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault();

  

}