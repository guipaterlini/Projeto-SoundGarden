const apiUrl = "https://soundgarden-api.deta.dev/events";

const listarEventosAdmin = function (event) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

listarEventosAdmin();
