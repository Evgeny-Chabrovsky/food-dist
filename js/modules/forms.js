import { openModal, closeModal } from "./modal";

function forms() {
  //Forms

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    success: "Скоро мы с вами свяжемся",
    failure: "что-то пошло не так...",
  };

  forms.forEach((i) => postData(i));

  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); //отмена перезагрузки при отправке
      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `display: block; margin : 0 auto;`;
      form.insertAdjacentElement("afterend", statusMessage); //вставляет снизу модального окна

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");
      // request.setRequestHeader("Content-type", "multipart/form-data");//если form-data
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });

      fetch("server.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      })
        .then((data) => data.text())
        .then((data) => {
          console.log(data);
          showModalThanks(message.success);
          setTimeout(() => statusMessage.remove(), 2000);
        })
        .catch(() => {
          showModalThanks(message.failure);
        })
        .finally(() => {
          form.reset();
          console.log("Fine!");
        });

      // request.setRequestHeader("Content-type", "application/json"); //если json

      // const json = JSON.stringify(object);
      // request.send(json);
    });
  }

  function showModalThanks(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content">    
      <div data-close class="modal__close">&times;</div>
      <div class="modal__title">
           ${message}
          </div>
  `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 3000);
  }
}
export default forms;
