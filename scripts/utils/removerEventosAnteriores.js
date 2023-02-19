import { formataDataToLocal } from "./formataDataToLocal.js";
import { formataDataISO8601 } from "./formataDataISO8601.js";

export const removerEventosAnteriores = function (data) {
  const hojeLocalFormat = formataDataToLocal(new Date());
  const hojeISOFormat = formataDataISO8601(hojeLocalFormat);

  for (let i = 0; i < data.length; i++) {
    let difDatas = new Date(data[i].scheduled) - new Date(hojeISOFormat);
    if (difDatas < 0) {
      data.splice(i, 1);
    }
  }
  return data;
};
