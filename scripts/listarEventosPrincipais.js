import { endpoint } from "./utils/apiEndpoint.js";
import { formataDataToLocal } from "./utils/formataDataToLocal.js";

// função para mostrar todos os eventos na pagina de eventos.html
const mostrarEventosPrincipais = function (data) {
  const divEventosPrincipais = document.querySelector("#lista-eventos-principais");

  for (let i = 0; i < 3; i++) {
    const evento = data[i];

    const eventosPrincipais = document.createElement("article");
    eventosPrincipais.className = "evento card p-5 m-3";
    eventosPrincipais.innerHTML = `
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
    <a href="#" class="btn btn-primary">reservar ingresso</a>
    `;
    divEventosPrincipais.appendChild(eventosPrincipais);
  }
};

// Fetch para pegar dados da API
fetch(endpoint, {
  method: "GET",
  redirect: "follow",
})
  .then((response) => response.json())
  .then((data) => {
    mostrarEventosPrincipais(data);
  })
  .catch((error) => {
    console.error("Erro ao processar a resposta do servidor: ", error);
  });