const apiUrl = "https://soundgarden-api.deta.dev/events";

export const enviarEventoPost = function (event) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Resposta do servidor:", data);
      alert("Evento criado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao processar a resposta do servidor: ", error);
    });
};
