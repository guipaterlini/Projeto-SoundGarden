export const mostrarListaEventos = function (data) {
  const tbodyEventosAdmin = document.querySelector("#tbody-eventosadmin");

  for (let i = 0; i < data.length; i++) {
    const evento = data[i];
    const rowNumber = i + 1;
    const eventosListadosAdmin = document.createElement("tr");
    eventosListadosAdmin.innerHTML = `
        <th scope="row">${rowNumber}</th>
        <td>${evento.scheduled}</td>
        <td>${evento.name}</td>
        <td>${evento.attractions}</td>
        <td>
            <a href="reservas.html" class="btn btn-dark"
            >ver reservas</a>
            <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
        </td>
      `;
    tbodyEventosAdmin.appendChild(eventosListadosAdmin);
  }
};
