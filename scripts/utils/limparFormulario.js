export const limparFormulario = function (formId) {
  const inputs = formId.elements;

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
};
