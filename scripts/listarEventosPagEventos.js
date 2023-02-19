import { endpoint } from "./utils/apiEndpoint.js";
import { formataDataToLocal } from "./utils/formataDataToLocal.js";
import { mostrarModalEventos } from "./modalEventos.js";
import { removerEventosAnteriores } from "./utils/removerEventosAnteriores.js";

// função para mostrar todos os eventos na pagina de eventos.html
const mostrarEventosPagEventos = function (data) {
  let dataTratada = removerEventosAnteriores(data)
  const divTodosEventosLP = document.querySelector("#divTodosEventos");

  for (let i = 0; i < dataTratada.length; i++) {
    const evento = dataTratada[i];

    const eventosPaginaEventos = document.createElement("article");
    eventosPaginaEventos.className = "evento card p-5 m-3";
    eventosPaginaEventos.innerHTML = `
    <h2>${evento.name} - ${
      //Transformando o formato da data que vem da API para DD/MM/YYYY HH:MM
      formataDataToLocal(evento.scheduled)
    }</h2>
    <h4>${
      evento.attractions.join(
        ", "
      ) /*.join é para colocar um espaço depois de virgula, deixando as atraçoes mais legiveis*/
    }</h4>
    <p>${evento.description}</p>
    <a type="button" data-target="#addUsuarioModal" class="btn btn-primary" id="open-modal-eventos" name="${evento._id}">reservar ingresso</a>
    `;
    divTodosEventosLP.appendChild(eventosPaginaEventos);
  }
  mostrarModalEventos();
};

// Fetch para pegar dados da API
fetch(endpoint, {
  method: "GET",
  redirect: "follow",
})
  .then((response) => response.json())
  .then((data) => {
    mostrarEventosPagEventos(data);
  })
  .catch((error) => {
    console.error("Erro ao processar a resposta do servidor: ", error);
  });
