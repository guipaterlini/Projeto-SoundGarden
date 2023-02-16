import { formataDataToLocal } from "./utils/formataDataToLocal.js";
import { formataDataISO8601 } from "./utils/formataDataISO8601.js";

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

  // Passa pelo campos do formulario e coleta as informações colocando-as no newEvent Object
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "submit") {
      // validando se o campo está vazio
      if (!inputs[i].value) {
        alert("Por favor preencha todos os campos.");
        return;
      }

      switch (inputs[i].name) {
        case "attractions":
          // Verifica se o input name é atracoes e se for transforma o conteudo dele em uma array
          eventoEditado[inputs[i].name] = inputs[i].value.split(/\s*,\s*/);
          break;
        case "number_tickets":
          // Verifica se o input name é number_tickets e se for transforma o conteudo dele em um number
          eventoEditado[inputs[i].name] = parseInt(inputs[i].value);
          break;
        case "scheduled":
          // Verifica se o input name é scheduled e se for transforma o conteudo dele em uma data formato ISO 8601

          // Checa se o valor do input vem no formato DD/MM/YYYY HH:mm
          let editadoEventDate = inputs[i].value;
          let regEx = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/;

          if (!editadoEventDate.match(regEx)) {
            alert(
              "Data inválida. Por favor, insira uma data e horário no formato 00/00/0000 00:00."
            );
            return;
          }
          eventoEditado[inputs[i].name] = formataDataISO8601(editadoEventDate);
          break;
        default:
          // caso seja de outro tipo, só acrescenta sem nenhum tratamento
          eventoEditado[inputs[i].name] = inputs[i].value;
      }
    }
  }

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
