import { criarReserva } from "./criarReserva.js";

export const mostrarModalEventos = function () {
  let idEvento;
  const openModalButtonEventos = document.querySelectorAll(
    "#open-modal-eventos"
  );
  const closeModalButtonEventos = document.querySelector(
    "#close-modal-eventos"
  );
  const modalEventos = document.querySelector("#modal-eventos");
  const fadeEventos = document.querySelector("#fade-eventos");

  const toggleModalEventos = () => {
    [modalEventos, fadeEventos].forEach((element) =>
      element.classList.toggle("hide-eventos")
    );
  };

  [closeModalButtonEventos, fadeEventos].forEach((element) => {
    element.addEventListener("click", function () {
      toggleModalEventos();
    });
  });
  openModalButtonEventos.forEach((element) => {
    element.addEventListener("click", function (e) {
      idEvento = e.target.getAttribute("name");
      toggleModalEventos();
      criarReserva(idEvento);
    });
  });

};
