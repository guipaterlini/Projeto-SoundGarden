import { formataDataToLocal } from "./utils/formataDataToLocal.js";
import { formataDataISO8601 } from "./utils/formataDataISO8601.js";
import { lerFormulario } from "./utils/lerFormulario.js";

const endpoint = "https://soundgarden-api.vercel.app/events/";

const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");

// Preenche o formulario com os dados que vem da api
const preencherFormEditarEvento = function (data) {
  const { name, poster, attractions, description, scheduled, number_tickets } =
    data;
  document.querySelector("#nome").value = name;
  document.querySelector("#banner").value = poster;
  document.querySelector("#atracoes").value = attractions.join(",  ");
  document.querySelector("#descricao").value = description;
  document.querySelector("#data").value = formataDataToLocal(scheduled);
  document.querySelector("#lotacao").value = number_tickets;
};

// Busca na api pelos dados do event a ser excluido

const editarDados = function (e) {
  fetch(endpoint + id, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => preencherFormEditarEvento(data))
    .catch((error) => console.log("error", error));
};

editarDados();

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
