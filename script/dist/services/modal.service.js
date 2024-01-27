import { fillModalContent } from "./modalContent.service.js";
export function setModalClosures() {
    let modalClose = document.querySelector(".modal-close");
    let modalOverlay = document.querySelector(".modal-overlay");
    let modal = document.querySelector(".modal");
    [modalClose, modalOverlay].forEach((element) => {
        element.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });
}
export function setModalOpenButtons() {
    let modalOpen = document.querySelectorAll(".modal-open");
    let modal = document.querySelector(".modal");
    modalOpen.forEach((element) => {
        element.addEventListener("click", function () {
            fillModalContent(element.getAttribute("data-id"), element.getAttribute("data-module"));
            modal.style.display = "block";
        });
    });
}
