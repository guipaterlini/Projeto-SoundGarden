// função para mostrar todos os eventos na pagina de admin e tambem na LP, coloquei junto em uma mesma função para nao precisar duplicar o codigo
export const mostrarListaEventos = function (data) {
  const tbodyEventosAdmin = document.querySelector("#tbody-eventosadmin");

  for (let i = 0; i < data.length; i++) {
    const evento = data[i];

    // Essa parte lista os eventos na pagina admin
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

    // Essa parte lista os eventos na pagina eventos
  }
};
