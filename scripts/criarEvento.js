var formNewEvent = document.querySelector("#form-new-event");

//Objeto contendo as informações do formulario
const newEvent = {};

formNewEvent.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = formNewEvent.elements;

  // Passa pelo campos do formulario e coleta as informações colocando-as no newEvent Object
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "submit") {
      if (inputs[i].name === "attractions") {
        // Verifica se o input name é atracoes e se for transforma o conteudo dele em uma array
        newEvent[inputs[i].name] = inputs[i].value.split(/\s*,\s*/);
      } else {
        if (inputs[i].name === "number_tickets") {
          // Verifica se o input name é number_tickets e se for transforma o conteudo dele em um number
          newEvent[inputs[i].name] = parseInt(inputs[i].value);
        } else {
          newEvent[inputs[i].name] = inputs[i].value;
        }
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
  .then((response) => response.text())
  .then((data) => {
    console.log("Resposta do servidor:", data);
    alert("Evento criado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao processar a resposta do servidor: ", error);
  });
