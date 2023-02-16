import { formataDataISO8601 } from "./formataDataISO8601.js";

export const lerFormulario = function (inputs, objectEvent) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "submit") {
      // validando se o campo está vazio
      if (!inputs[i].value) {
        alert("Por favor preencha todos os campos.");
        throw new Error("Por favor preencha todos os campos.");
      }

      switch (inputs[i].name) {
        case "attractions":
          // Verifica se o input name é atracoes e se for transforma o conteudo dele em uma array
          objectEvent[inputs[i].name] = inputs[i].value.split(/\s*,\s*/);
          break;
        case "number_tickets":
          // Verifica se o input name é number_tickets e se for transforma o conteudo dele em um number
          objectEvent[inputs[i].name] = parseInt(inputs[i].value);
          break;
        case "scheduled":
          // Verifica se o input name é scheduled e se for transforma o conteudo dele em uma data formato ISO 8601

          // Checa se o valor do input vem no formato DD/MM/YYYY HH:mm
          let objectEventDate = inputs[i].value;
          let regEx = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/;

          if (!objectEventDate.match(regEx)) {
            alert(
              "Data inválida. Por favor, insira uma data e horário no formato 00/00/0000 00:00."
            );
            throw new Error(
              "Data inválida. Por favor, insira uma data e horário no formato 00/00/0000 00:00."
            );
          }
          objectEvent[inputs[i].name] = formataDataISO8601(objectEventDate);
          break;
        default:
          // caso seja de outro tipo, só acrescenta sem nenhum tratamento
          objectEvent[inputs[i].name] = inputs[i].value;
      }
    }
  }
  return objectEvent;
};
