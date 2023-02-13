// Identifica o ID que está na URL da pagina
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");

const preencherFormExcluirEvento = function (data) {

}

// Busca na api pelos dados do event a ser excluido
const apiUrl = "https://soundgarden-api.deta.dev/events";
  
  fetch(apiUrl+id, {
    method: 'GET',
    redirect: 'follow'
  })
    .then(response => response.json())
    .then(data => preencherFormExcluirEvento(data))
    .catch(error => console.log('error', error));




// fetch get com id

// preencher formulario com informções da api

// no submit excluir o evento
