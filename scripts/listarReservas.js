import {
  endpointReservaEventoById,
  endpointReserva,
} from "./utils/apiEndpoint.js";

export const exibirModalAdmin = function () {
  const openModalButtonAdmin = document.querySelectorAll("#open-modal-admin");
  const closeModalButtonAdmin = document.querySelector("#close-modal-admin");
  const modalAdmin = document.querySelector("#modal-admin");
  const fadeAdmin = document.querySelector("#fade-admin");
  const tbodyReservas = document.querySelector("#tbody-reservas");
  let idEvento;
  let reserva;
  tbodyReservas.innerHTML = "";


  const toggleModalAdmin = () => {
    [modalAdmin, fadeAdmin].forEach((el) => el.classList.toggle("hide-admin"));
  };

  [closeModalButtonAdmin, fadeAdmin].forEach((el) => {
    el.addEventListener("click", function () {
      toggleModalAdmin();
      reserva = {};
    });
  });

  const mostrarReservas = function (data) {
    tbodyReservas.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      reserva = data[i];

      const reservasEventos = document.createElement("tr");
      reservasEventos.innerHTML = `
          <th scope="row">${i + 1}</th>
          <td>${reserva.owner_name}</td>
          <td>${reserva.owner_email}</td>
          <td>${reserva.number_tickets}</td>
          <td>
          <a class="btn btn-danger" id="btn-excluir-reserva" name="${
            reserva._id
          }" >excluir</a>
        </td>
        `;
      tbodyReservas.appendChild(reservasEventos);
    }
    excluirReservaById();
  };

  const buscarReservas = function (idEvento) {
    fetch(endpointReservaEventoById + idEvento, {
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
  };

  openModalButtonAdmin.forEach((button) => {
    button.addEventListener("click", (e) => {
      idEvento = e.target.getAttribute("name"); // atribuição do valor do id
      toggleModalAdmin();
      buscarReservas(idEvento);
    });
  });
};

// Excluir Reserva

const excluirReservaById = function () {
  const modalAdmin = document.querySelector("#modal-admin");
  const fadeAdmin = document.querySelector("#fade-admin");
  const btnExcluirReserva = document.querySelectorAll("#btn-excluir-reserva");

  const toggleModalAdmin = () => {
    [modalAdmin, fadeAdmin].forEach((el) => el.classList.toggle("hide-admin"));
  };

  btnExcluirReserva.forEach((button) => {
    button.addEventListener("click", (event) => {
      let idReserva = event.target.getAttribute("name");
      excluirReserva(idReserva);
    });
  });

  const excluirReserva = function (idReserva) {
    fetch(endpointReserva + idReserva, {
      method: "DELETE",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then(() => {
        toggleModalAdmin();
        alert("Reserva deletada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao processar a resposta do servidor: ", error);
      });
  };
};
