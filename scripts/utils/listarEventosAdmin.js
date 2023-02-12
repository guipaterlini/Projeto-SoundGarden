export const listarEventosAdmin = function (data) {
  const tbodyEventosAdmin = document.querySelector("#tbody-eventosadmin");

  for (let i = 0; i < data.length; i++) {
    const evento = data[i];

    const eventosListados = document.createElement("tr");
    eventosListados.innerHTML = `
        <th scope="row">${i++}</th>
        <td>${evento.scheduled}</td>
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
      tbodyEventosAdmin.appendChild(eventosListados);
  }
};

{
  /* <tr>
<th scope="row">1</th>
<td>05/03/2022 20:00</td>
<td>Festival Coala</td>
<td>Miley Cyrus, Liniker, Smashing Pumpkins</td>
<td>
  <a href="reservas.html" class="btn btn-dark"
    >ver reservas</a
  >
  <a href="editar.html" class="btn btn-secondary">editar</a>
  <a href="editar.html" class="btn btn-danger">excluir</a>
</td>
</tr> */
}
