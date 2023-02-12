// função para mostrar todos os eventos na pagina de admin
const mostrarEventosAdmin = function (data) {
  const tbodyEventosAdmin = document.querySelector("#tbody-eventosadmin");

  for (let i = 0; i < data.length; i++) {
    const evento = data[i];

    const eventosListadosAdmin = document.createElement("tr");
    // toLocaleString() Ajusta o formato da data para o formato usado no computador da pessoa
    eventosListadosAdmin.innerHTML = `
    <th scope="row">${i + 1}</th>
    <td>${new Date(evento.scheduled).toLocaleString()}</td>
    <td>${evento.name}</td>
    <td>${evento.attractions}</td>
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
const apiUrl = "https://soundgarden-api.deta.dev/events";

const listarEventosAdmin = function (event) {
  fetch(apiUrl, {
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
};

listarEventosAdmin();
