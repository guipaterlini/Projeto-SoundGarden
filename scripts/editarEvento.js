import { endpoint } from "./utils/apiEndpoint.js";
import { lerFormulario } from "./utils/lerFormulario.js";
import { preencherFormulario } from "./utils/preencherFormulario.js";
import { lerIdUrl } from "./utils/lerIdUrl.js";

const id = lerIdUrl();

// Busca na api pelos dados do event a ser excluido
fetch(endpoint + id, {
  method: "GET",
  redirect: "follow",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => preencherFormulario(data))
  .catch((error) => console.log("error", error));

var formEditarEvento = document.querySelector("#form-editar-evento");
const eventoEditado = {};

formEditarEvento.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = formEditarEvento.elements;

  lerFormulario(inputs, eventoEditado);

  fetch(endpoint + id, {
    method: "PUT",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventoEditado),
  })
    .then((response) => response.text())
    .then(() => {
      window.location.replace("./admin.html");
      alert("Evento editado com sucesso!");
    })
    .catch((error) => console.log("error", error));
});
