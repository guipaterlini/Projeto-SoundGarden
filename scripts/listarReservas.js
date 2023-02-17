export const exibirModalAdmin = function () {
    const openModalButtonAdmin = document.querySelector("#open-modal-admin");
    const closeModalButtonAdmin = document.querySelector("#close-modal-admin");
    const modalAdmin = document.querySelector("#modal-admin");
    const fadeAdmin = document.querySelector("#fade-admin");
  
    const toggleModalAdmin = () => {
      modalAdmin.classList.toggle("hide-admin");
      fadeAdmin.classList.toggle("hide-admin");
    };
  
    [openModalButtonAdmin, closeModalButtonAdmin, fadeAdmin].forEach((el) => {
      el.addEventListener("click", toggleModalAdmin);
    });
  }
