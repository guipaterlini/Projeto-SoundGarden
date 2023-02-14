export function formataDataToLocal(data) {
  // Pega a data no formato ISO 8601 direto da API e deixa no formato DD/MM/YYYY HH:MM
  data = new Date(data).toLocaleDateString("pt-BR") +
    " " +
    new Date(data).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
}
