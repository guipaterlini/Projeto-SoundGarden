import { endpoint } from "./utils/apiEndpoint.js";
import { lerFormulario } from "./utils/lerFormulario.js";
import { preencherFormulario } from "./utils/preencherFormulario.js";
import { lerIdUrl } from "./utils/lerIdUrl.js";

//função que pega o ID que veio pela URL
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
  // função que prenche o formulario com os dados que vieram pela api
  .then((data) => preencherFormulario(data))
  .catch((error) => console.log("error", error));

var formEditarEvento = document.querySelector("#form-editar-evento");
const eventoEditado = {};

formEditarEvento.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = formEditarEvento.elements;
  // função que le todos os inputs do formulario e salva em objeto
  lerFormulario(inputs, eventoEditado, undefined);
  // função que envia os dados salvos no objeto para para atualizarem o banco de dados
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
