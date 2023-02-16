const apiUrl = "https://soundgarden-api.vercel.app/events";

export const enviarEventoPost = function (event) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((response) => response.json())
    .then(() => {
      window.location.replace("./admin.html");
      alert("Evento criado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao processar a resposta do servidor: ", error);
    });
};
