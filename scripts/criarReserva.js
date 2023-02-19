import { endpointReserva } from "./utils/apiEndpoint.js";
import { lerFormulario } from "./utils/lerFormulario.js";

export const criarReserva = function (idEvento) {
  var formNovaRserva = document.querySelector("#form-reservar");
  //Objeto contendo as informações do formulario
  const objectReserva = {};

  formNovaRserva.addEventListener("submit", function (event) {
    event.preventDefault();

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
      })
      .catch((error) => {
        console.error("Erro ao processar a resposta do servidor: ", error);
      });
  });
};
