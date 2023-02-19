export const validacaoEmail = function (email) {
  console.log(email);
  let usuario = email.substring(0, email.indexOf("@"));
  let dominio = email.substring(email.indexOf("@") + 1, email.length);

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("msgemail").innerHTML = "E-mail válido";
  } else {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    throw new Error("E-mail invalido");
  }
  return email;
};
