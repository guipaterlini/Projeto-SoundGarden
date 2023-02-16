import { endpoint } from "./utils/apiEndpoint.js";
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

// no click excluir o evento
const btnExcluirEvento = document.querySelector("#btn-excluir-para-sempre");
btnExcluirEvento.addEventListener("click", function (event) {
  const nomeEvento = document.querySelector("#nome").value;
  event.preventDefault();

  fetch(endpoint + id, {
    method: "DELETE",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then(() => {
      // usado o replace para que o usuario nao possa voltar a pagina do excluir-evento.html, ja que o evento foi deletado
      window.location.replace("./admin.html");
      alert("Evento " + nomeEvento + " deletado com sucesso!");
    })
    .catch((error) => console.log("error", error));
});
