import { formataDataToLocal } from "./formataDataToLocal.js";
import { formataDataISO8601 } from "./formataDataISO8601.js";

export const removerEventosAnteriores = function (data) {
  const hojeLocalFormat = formataDataToLocal(new Date());
  const hojeISOFormat = formataDataISO8601(hojeLocalFormat);

  const novoDataArray = [];
  for (let i = data.length - 1; i >= 0; i--) {
    let difDatas = new Date(data[i].scheduled) - new Date(hojeISOFormat);
    if (difDatas >= 0) {
      novoDataArray.unshift(data[i]);
    }
  }
  return novoDataArray;
};
