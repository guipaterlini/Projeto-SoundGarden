import { endpointReserva } from "./utils/apiEndpoint.js";

export const exibirModalAdmin = function () {
  const openModalButtonAdmin = document.querySelector("#open-modal-admin");
  const closeModalButtonAdmin = document.querySelector("#close-modal-admin");
  const modalAdmin = document.querySelector("#modal-admin");
  const fadeAdmin = document.querySelector("#fade-admin");

  const toggleModalAdmin = () => {
    [modalAdmin, fadeAdmin].forEach((el) => el.classList.toggle("hide-admin"));
  };

  [openModalButtonAdmin, closeModalButtonAdmin, fadeAdmin].forEach((el) => {
    el.addEventListener("click", toggleModalAdmin);
  });
};

const mostrarReservas = function (data) {
  const tbodyReservas = document.querySelector("#tbody-reservas");

  for (let i = 0; i < data.length; i++) {
    const reserva = data[i];

    const reservasEventos = document.createElement("tr");
    reservasEventos.innerHTML = `
      <th scope="row">${i + 1}</th>
      <td>${reserva.owner_name}</td>
      <td>${reserva.owner_email}</td>
      <td>${reserva.number_tickets}</td>
      <td>
      <a href="excluir-evento.html?id=${
        reserva._id
      }" class="btn btn-danger">excluir</a>
      </td>
      `;
    tbodyReservas.appendChild(reservasEventos);
  }
  exibirModalAdmin();
};

fetch(endpointReserva, {
  method: "GET",
  redirect: "follow",
})
  .then((response) => response.json())
  .then((data) => {
    mostrarReservas(data);
  })
  .catch((error) => {
    console.error("Erro ao processar a resposta do servidor: ", error);
  });
