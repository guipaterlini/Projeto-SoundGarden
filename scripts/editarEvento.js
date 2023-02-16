import { formataDataToLocal } from "./utils/formataDataToLocal.js";

const  endpoint = "https://soundgarden-api.vercel.app/events";

const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id")

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

// no click enviar o evento
const btnEnviar = document.getElementById('btn-enviar');
btnEnviar.addEventListener("click", function (e) {
  const nomeEvento = document.querySelector("#nome").value
  e.preventDefault();

  fetch(endpoint + id, {
    method: "PUT",
    body: raw,
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then(() => {
      window.location.replace("./admin.html");
      alert("Evento " + nomeEvento + " editado com sucesso!");
    })
    .catch((error) => console.log("error", error));
});
