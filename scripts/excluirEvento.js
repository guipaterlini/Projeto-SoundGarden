import { formataDataToLocal } from "./utils/formataDataToLocal.js";

const apiUrl = "https://soundgarden-api.vercel.app/events/";

// Identifica o ID que está na URL da pagina
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");

// Preenche o formulario com os dados que vem da api
const preencherFormExcluirEvento = function (data) {
  // Para deixar o codigo mais curto eu usei 'desestruturação de objetos'
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

const getByIdExcluirDados = function (event) {
  fetch(apiUrl + id, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => preencherFormExcluirEvento(data))
    .catch((error) => console.log("error", error));
};

getByIdExcluirDados();

// no click excluir o evento
const btnExcluirEvento = document.querySelector("#btn-excluir-para-sempre");
btnExcluirEvento.addEventListener("click", function (event) {
  const nomeEvento = document.querySelector("#nome").value
  event.preventDefault();

  fetch(apiUrl + id, {
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
