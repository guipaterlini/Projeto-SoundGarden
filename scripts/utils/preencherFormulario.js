import { formataDataToLocal } from "./formataDataToLocal.js";

export const  preencherFormulario = function (data) {
    // Para deixar o codigo mais curto eu usei 'desestruturação de objetos'
    const { name, poster, attractions, description, scheduled, number_tickets } =
      data;
    document.querySelector("#nome").value = name;
    document.querySelector("#banner").value = poster;
    document.querySelector("#atracoes").value = attractions.join(",  ");
    document.querySelector("#descricao").value = description;
    document.querySelector("#data").value = formataDataToLocal(scheduled);
    document.querySelector("#lotacao").value = number_tickets;
  };