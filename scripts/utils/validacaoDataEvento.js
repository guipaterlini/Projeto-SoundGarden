import { formataDataToLocal } from "./formataDataToLocal.js";
import { formataDataISO8601 } from "./formataDataISO8601.js";

export const validacaoDataEvento = function (date) {
  const hojeLocalFormat = formataDataToLocal(new Date());
  const hojeISOFormat = formataDataISO8601(hojeLocalFormat);

  let difDatas = new Date(date) - new Date(hojeISOFormat);
  if (difDatas < 0) {
    alert(
        "Data inválida. Por favor, insira uma data e horário posterior a hoje."
      );
      throw new Error(
        "Data inválida. Por favor, insira uma data e horário posterior a hoje."
      );
  } 
};
