let openBtnModal= document.querySelector(".hotel-search-button");
let modalContainer= document.querySelector(".modal-container");
let  closeBtnModal= document.querySelector(".modal-close-button");

openBtnModal.onclick= function() {
  modalContainer.classList.remove("modal-container-close")
}

closeBtnModal.onclick= function() {
  modalContainer.classList.add("modal-container-close")
}
