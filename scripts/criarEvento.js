import { enviarEventoPost } from "./utils/novoEventoPost.js";
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
  enviarEventoPost(objectEvent);
});
