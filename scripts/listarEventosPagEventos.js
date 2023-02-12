// função para mostrar todos os eventos na pagina de eventos.html
const mostrarEventosPagEventos = function (data) {
  const divTodosEventosLP = document.querySelector("#divTodosEventos");

  for (let i = 0; i < data.length; i++) {
    const evento = data[i];

    const eventosPaginaEventos = document.createElement("article");
    eventosPaginaEventos.className = "evento card p-5 m-3"
    eventosPaginaEventos.innerHTML = `
    <h2>nome do evento - 05/03/2022</h2>
    <h4>Arctic Monkeys, The Kooks, Hiatus Kaiyote</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
      aperiam sunt quo similique, dolorum consectetur inventore ipsam,
      officiis neque natus eius harum alias quidem. Possimus nobis in
      inventore tenetur asperiores.
    </p>
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
