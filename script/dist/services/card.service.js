const insertCards = (projects, cardsContainerClass, module) => {
    console.log(cardsContainerClass);
    const container = document.querySelector(`.${cardsContainerClass}`);
    projects.forEach((project, index) => {
        let card = document.createElement('div');
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
