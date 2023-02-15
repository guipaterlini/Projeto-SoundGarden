const  endpoint = 'https://soundgarden-api.deta.dev/events/:id';

// Buscar a API de eventos por ID

function editarEvento() {
    let params = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(endpoint, params)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let btnEditar = document.getElementsByClassName('btn btn-secondary');
            btnEditar.textContext = data.id;
            // btnEditar.addEventListener('click', () => {
                //console.log(windon.location.pathname)
                // windon.location.href = 'editar-evento.html'
    
            // })
        })
        .catch(error => {
            console.log('error', error);
        })

}

editarEvento();

// Buscar a API de atualizar (put)

function atualizarEvento() {
    let paramsAtualizar = {
        method: 'PUT',
        body: raw,
        redirect: 'follow'
    };

    fetch(endpoint, paramsAtualizar)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.log('error', error));
}
atualizarEvento();































const apiUrl = "https://soundgarden-api.deta.dev/events/:id";

// Identifica o ID que está na URL da pagina
const url = new URL(window.location.href);
const searchId = new URLSearchParams(url.search).get("id");


// Preenche o formulario com os dados que vem da api
const preencherFormEditarEvento = function (data) {
  // Para deixar o codigo mais curto eu usei 'desestruturação de objetos'
  const { name, banner, attractions, description, tickets } =
    data;
  document.querySelector("#nome").value = name;
  document.querySelector("#banner").value = banner;
  document.querySelector("#atracoes").value = attractions.join(",  ");
  document.querySelector("#descricao").value = description;
  document.querySelector("#lotacao").value = tickets;
};

// Busca na api pelos dados do event a ser excluido

const editarEvento = function (event) {
  fetch(apiUrl, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => preencherFormEditarEvento(data))
    .catch((error) => console.log("error", error));
};

editarEvento();

// no click excluir o evento
const btnEditarEvento = document.querySelector("#btn-secondary");
btnEditarEvento.addEventListener("click", function (event) {
  const nomeEvento = document.querySelector("#nome").value
  event.preventDefault();

  fetch(apiUrl, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then(result => console.log(result))
    .then(() => {
      // usado o replace para que o usuario nao possa voltar a pagina do excluir-evento.html, ja que o evento foi deletado
      window.location.replace("./editar-evento.html");
      alert("Salvo" + nomeEvento);
    })
    .catch((error) => console.log("error", error));
});


