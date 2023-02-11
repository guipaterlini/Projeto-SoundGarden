var formNewEvent = document.querySelector("#form-new-event");

const newEvent = {};

formNewEvent.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = formNewEvent.elements;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "submit") {
      newEvent[inputs[i].name] = inputs[i].value;
    }
  }
  console.log(newEvent);
});
