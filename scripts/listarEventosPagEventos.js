// função para mostrar todos os eventos na pagina de eventos.html
const mostrarEventosPagEventos = function (data) {
  const divTodosEventosLP = document.querySelector("#divTodosEventos");

  for (let i = 0; i < data.length; i++) {
    const evento = data[i];

    const eventosPaginaEventos = document.createElement("article");
    eventosPaginaEventos.className = "evento card p-5 m-3";
    eventosPaginaEventos.innerHTML = `
    <h2>${evento.name} - ${
      //Transformando o formato da data que vem da API para DD/MM/YYYY HH:MM
      new Date(evento.scheduled).toLocaleDateString("pt-BR") +
      " " +
      new Date(evento.scheduled).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    }</h2>
    <h4>${
      evento.attractions.join(
        ", "
      ) /*.join é para colocar um espaço depois de virgula, deixando as atraçoes mais legiveis*/
    }</h4>
    <p>${evento.description}</p>
    <a href="#" class="btn btn-primary">reservar ingresso</a>
    `;
    divTodosEventosLP.appendChild(eventosPaginaEventos);
  }
};

// Fetch para pegar dados da API
const apiUrl = "https://soundgarden-api.deta.dev/events";

const listarEventosPagEventos = function (event) {
  fetch(apiUrl, {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((data) => {
      mostrarEventosPagEventos(data);
    })
    .catch((error) => {
      console.error("Erro ao processar a resposta do servidor: ", error);
    });
};

listarEventosPagEventos();
