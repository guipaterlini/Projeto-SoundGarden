// Identifica o ID que está na URL da pagina
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");

// Preenche o formulario com os dados que vem da api
const preencherFormExcluirEvento = function (data) {
  // Para deixar o codigo mais curto eu usei 'desestruturação de objetos'
  const { name, banner, attractions, description, scheduled, number_tickets } =
    data;
  document.querySelector("#nome").value = name;
  document.querySelector("#banner").value = banner;
  document.querySelector("#atracoes").value = attractions;
  document.querySelector("#descricao").value = description;
  document.querySelector("#data").value = scheduled;
  document.querySelector("#lotacao").value = number_tickets;
};

// Busca na api pelos dados do event a ser excluido
const apiUrl = "https://soundgarden-api.deta.dev/events/";

const getByIdExcluirDados = function (event) {
  fetch(apiUrl + id, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => preencherFormExcluirEvento(data))
    .catch((error) => console.log("error", error));
};

getByIdExcluirDados();

// no submit excluir o evento
