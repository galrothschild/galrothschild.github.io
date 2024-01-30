import { IProject } from "../models/IProject.model.js";

const insertCards = (projects: Array<IProject>, cardsContainerClass: string, module: number): void => {
    const container = document.querySelector(`.${cardsContainerClass}`) as HTMLDivElement;
    projects.forEach((project, index: number) => {
        let card: HTMLDivElement = document.createElement('div');
        card.innerHTML = `
                        <img src="./images/landing pages/${project.image}" alt="${project.name}">
                        <h3>${project.name}</h3>
                        <p>${project.shortDesc}</p>
                        <button class="modal-open" data-id="${index}" data-module="${module}">Learn More</button>
                    `;
        card.classList.add('card');
        container.appendChild(card);
    });
};

export default insertCards;