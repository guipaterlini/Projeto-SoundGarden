import { endpointReserva } from "./utils/apiEndpoint.js";
import { lerFormulario } from "./utils/lerFormulario.js";

export const criarReserva = function (idEvento, objectReserva) {
  const modalEventos = document.querySelector("#modal-eventos");
  const fadeEventos = document.querySelector("#fade-eventos");

  const toggleModalEventos = () => {
    [modalEventos, fadeEventos].forEach((element) =>
      element.classList.toggle("hide-eventos")
    );
  };

  var formNovaRserva = document.querySelector("#form-reservar");

  const inputs = formNovaRserva.elements;
  // função que le os dados do formulario
  lerFormulario(inputs, objectReserva, idEvento);

  // função que envia os dados pela api
  fetch(endpointReserva, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectReserva),
  })
    .then((response) => response.json())
    .then(() => {
      alert("Reserva feita com sucesso!");
      toggleModalEventos();
    })
    .catch((error) => {
      console.error("Erro ao processar a resposta do servidor: ", error);
    });
};
