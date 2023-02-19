export const mostrarModalEventos = function () {
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
    element.addEventListener("click", function () {
      toggleModalEventos();
    });
  });

//   criarReserva();
};
