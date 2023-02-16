export function formataDataISO8601(dateString) {
  // Coloquei data brasileira porque pensei que as pessoas colocariam o dado no formato 24:00
  let data_brasileira = dateString;

  // Converte o input dado no formulario para o formato Date
  let data_objeto = new Date(
    data_brasileira.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
  );

  // Formata a data no formato ISO 8601
  let data_iso8601 = data_objeto.toISOString();

  return data_iso8601;
}
