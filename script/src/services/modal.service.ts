import { fillModalContent } from "./modalContent.service.js";

export function setModalClosures(): void {
    let modalClose = document.querySelector(".modal-close") as HTMLButtonElement;
    let modalOverlay = document.querySelector(".modal-overlay") as HTMLDivElement;
    let modal = document.querySelector(".modal") as HTMLDivElement;
    [modalClose, modalOverlay].forEach((element: HTMLElement) => {
        element.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });
}

export function setModalOpenButtons(): void {
    let modalOpen: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".modal-open");
    let modal = document.querySelector(".modal") as HTMLDivElement;
    modalOpen.forEach((element: HTMLButtonElement) => {
        element.addEventListener("click", function () {
            fillModalContent(element.getAttribute("data-id"), element.getAttribute("data-module"));
            modal.style.display = "block";
        });
    });
}