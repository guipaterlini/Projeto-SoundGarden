import { mostrarListaEventos } from "./utils/mostrarListaEventos.js";

const apiUrl = "https://soundgarden-api.deta.dev/events";

const listarEventos = function (event) {
  fetch(apiUrl, {
    method: "GET",
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((data) => {
      mostrarListaEventos(data);
    })
    .catch((error) => {
      console.error("Erro ao processar a resposta do servidor: ", error);
    });
  };
  
  listarEventos();
  