import { criarReserva } from "./criarReserva.js";
import { limparFormulario } from "./utils/limparFormulario.js";

export const mostrarModalEventos = function () {
  let objectReserva = {};
  let idEvento;
  const openModalButtonEventos = document.querySelectorAll(
    "#open-modal-eventos"
  );
  const closeModalButtonEventos = document.querySelector(
    "#close-modal-eventos"
  );
  const modalEventos = document.querySelector("#modal-eventos");
  const fadeEventos = document.querySelector("#fade-eventos");
  const formNovaReserva = document.querySelector("#form-reservar");

  const toggleModalEventos = () => {
    [modalEventos, fadeEventos].forEach((element) =>
      element.classList.toggle("hide-eventos")
    );
  };

  [closeModalButtonEventos, fadeEventos].forEach((element) => {
    element.addEventListener("click", function () {
      toggleModalEventos();
      objectReserva = {};
      limparFormulario(formNovaReserva);
    });
  });
  openModalButtonEventos.forEach((element) => {
    element.addEventListener("click", function (e) {
      idEvento = e.target.getAttribute("name");
      toggleModalEventos();
    });
  });

  formNovaReserva.addEventListener("submit", function (event) {
    event.preventDefault();
    criarReserva(idEvento, objectReserva);
  });
};
