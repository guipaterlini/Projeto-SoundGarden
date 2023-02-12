import { formataDataISO8601 } from "./utils/formataDataISO8601.js";
import { enviarEventoPost } from "./utils/novoEventoPost.js";

var formNewEvent = document.querySelector("#form-new-event");

//Objeto contendo as informações do formulario
const newEvent = {};

formNewEvent.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = formNewEvent.elements;

  // Passa pelo campos do formulario e coleta as informações colocando-as no newEvent Object
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "submit") {
      // validando se o campo está vazio
      if (!inputs[i].value) {
        alert("Por favor preencha todos os campos.");
        return;
      }

      switch (inputs[i].name) {
        case "attractions":
          // Verifica se o input name é atracoes e se for transforma o conteudo dele em uma array
          newEvent[inputs[i].name] = inputs[i].value.split(/\s*,\s*/);
          break;
        case "number_tickets":
          // Verifica se o input name é number_tickets e se for transforma o conteudo dele em um number
          newEvent[inputs[i].name] = parseInt(inputs[i].value);
          break;
        case "scheduled":
          // Verifica se o input name é scheduled e se for transforma o conteudo dele em uma data formato ISO 8601

          // Checa se o valor do input vem no formato DD/MM/YYYY HH:mm, caso 
          let newEventDate = inputs[i].value
          let regEx = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/;

          if (!newEventDate.match(regEx)) {
            alert("Data inválida. Por favor, insira uma data e horário no formato 00/00/0000 00:00.");
            return;
          }
          newEvent[inputs[i].name] = formataDataISO8601(newEventDate);
          break;
        default:
          // caso seja de outro tipo, só acrescenta sem nenhum tratamento
          newEvent[inputs[i].name] = inputs[i].value;
      }
    }
  }

  //Enviando dados para a API
  enviarEventoPost(newEvent);
});
