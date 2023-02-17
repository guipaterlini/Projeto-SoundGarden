import { endpoint } from "./utils/apiEndpoint.js";
import { lerFormulario } from "./utils/lerFormulario.js";

var formNewEvent = document.querySelector("#form-new-event");
//Objeto contendo as informações do formulario
const objectEvent = {};

formNewEvent.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = formNewEvent.elements;
  // função que le os dados do formulario
  lerFormulario(inputs, objectEvent);

  // função que envia os dados pela api
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectEvent),
  })
    .then((response) => response.json())
    .then(() => {
      window.location.replace("./admin.html");
      alert("Evento criado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao processar a resposta do servidor: ", error);
    });
});
