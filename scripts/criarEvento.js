var formNewEvent = document.querySelector("#form-new-event");

//Objeto contendo as informações do formulario
const newEvent = {};

formNewEvent.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = formNewEvent.elements;

  // Passa pelo campos do formulario e coleta as informações colocando-as no newEvent Object
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "submit") {
      if (inputs[i].name === "atracoes") {
        newEvent[inputs[i].name] = inputs[i].value.split(/\s*,\s*/);
      } else {
        newEvent[inputs[i].name] = inputs[i].value;
      }
    }
  }
  console.log(newEvent);
});

console.log(JSON.stringify(newEvent));

//Enviando dados para a API
const apiUrl = "soundgarden-api.deta.dev/events";

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newEvent),
})
  .then((reponse) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
