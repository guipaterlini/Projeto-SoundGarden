import { endpoint } from "./utils/apiEndpoint.js";
import { formataDataToLocal } from "./utils/formataDataToLocal.js";

// função para mostrar todos os eventos na pagina de admin
const mostrarEventosAdmin = function (data) {
  const tbodyEventosAdmin = document.querySelector("#tbody-eventosadmin");

  for (let i = 0; i < data.length; i++) {
    const evento = data[i];

    const eventosListadosAdmin = document.createElement("tr");
    eventosListadosAdmin.innerHTML = `
    <th scope="row">${i + 1}</th>
    <td>${
      //Transformando o formato da data que vem da API para DD/MM/YYYY HH:MM
      formataDataToLocal(evento.scheduled)
    }</td>
    <td>${evento.name}</td>
    <td>${
      evento.attractions.join(
        ", "
      ) /*.join é para colocar um espaço depois de virgula, deixando as atraçoes mais legiveis*/
    }</td>
    <td>
    <a href="reservas.html" class="btn btn-dark"
    >ver reservas</a>
    <a href="editar-evento.html?id=${
      evento._id
    }" class="btn btn-secondary">editar</a>
    <a href="excluir-evento.html?id=${
      evento._id
    }" class="btn btn-danger">excluir</a>
    </td>
    `;
    tbodyEventosAdmin.appendChild(eventosListadosAdmin);
  }
};

// Fetch para pegar dados da API
fetch(endpoint, {
  method: "GET",
  redirect: "follow",
})
  .then((response) => response.json())
  .then((data) => {
    mostrarEventosAdmin(data);
  })
  .catch((error) => {
    console.error("Erro ao processar a resposta do servidor: ", error);
  });
