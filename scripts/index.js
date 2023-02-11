const btnSendNewEvent = document.querySelector("#btn-send-new-event");
const newEventName = document.querySelector("#nome");
const newEventAtractions = document.querySelector("#atracoes");
const newEventDescription = document.querySelector("#descricao");
const newEventDate = document.querySelector("#data");
const newEventCapacity = document.querySelector("#lotacao");

const events = [];

function createNewEvent() {
  events.push({
    Nome: newEventName.value,
    Atracoes: newEventAtractions.value,
    Descricao: newEventDescription.value,
    Data: newEventDate.value,
    Lotacao: newEventCapacity.value,
  });
}

btnSendNewEvent.addEventListener("click", createNewEvent);

console.log(events);
