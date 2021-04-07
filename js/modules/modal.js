function closeModal() {
  modalWindow.style.display = "none";
  document.body.style.overflow = "";
}
function openModal() {
  modalWindow.style.display = "block";
  document.body.style.overflow = "hidden"; //убираем прокрутку окна
  /* clearTimeout(modalTimer); */ //выключаем таймер
}

const modalWindow = document.querySelector(".modal"),
  modalBtns = document.querySelectorAll("[data-modal]");
function modal() {
  // Modal

  modalBtns.forEach((i) => {
    i.addEventListener("click", openModal);
  });

  //close with onclick button
  //close with onclick modalWindow area
  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });
  //close with keydown "esc"
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.style.display === "block")
      closeModal();
  });

  // const modalTimer  = setTimeout(openModal, 10000) ; //таймер всплытия

  function showModalByScroll() {
    if (
      Math.floor(window.pageYOffset) +
        document.documentElement.clientHeight +
        10 >= //не хватает длины
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll); //удаляем после открытия
    }
  }
  window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { openModal, closeModal };
