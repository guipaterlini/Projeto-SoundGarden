export const fitrarEventosPagPrincipal = function (data) {
  data.sort((eventoA, eventoB) => eventoA.scheduled - eventoB.scheduled);
  return data;
};
