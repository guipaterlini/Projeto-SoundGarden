import { listarEventosAdmin } from "./utils/listarEventosAdmin";
import { listarEventosLandingPage } from "./utils/listarEventosLandingPage";

const apiUrl = "https://soundgarden-api.deta.dev/events";

const listarEventos = function (event) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      listarEventosAdmin(data);
      listarEventosLandingPage(data);
    })
    .catch((error) => {
      console.error("Erro ao processar a resposta do servidor: ", error);
    });
};

listarEventos();
