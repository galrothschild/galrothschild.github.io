import { projects } from "../data/projects.data.js";
export function fillModalContent(dataID, moduleNumber) {
    if (dataID === null)
        throw new Error("No Data ID");
    if (dataID === null)
        throw new Error("No Module ID");
    const projectArray = projects[Number(moduleNumber)];
    let project = projectArray[+dataID];
    let projName = document.querySelector(".project-name");
    let projDesc = document.querySelector(".project-description");
    let projDownload = document.querySelector(".project-download");
    let projGoto = document.querySelector(".project-goto");
    let projGithub = document.querySelector(".project-github");
    let projImage = document.querySelector(".project-image");
    let projTechnologiesElement = document.querySelector(".project-technologies");
    if (window.location.href.includes("github")) {
        project.source.replace("/projects", "");
        console.log(project.source);
        console.log(window.location.href);
    }
    ;
    let projTechnologies = document.createElement("div");
    project.technologies.forEach(technology => {
        const technologyImg = document.createElement("img");
        technologyImg.src = `./images/technologies/${technology}.png`;
        technologyImg.alt = technology;
        projTechnologies.appendChild(technologyImg);
    });
    projTechnologiesElement.innerHTML = projTechnologies.innerHTML;
    projName.innerText = project.name;
    projDesc.innerText = project.shortDesc;
    projDownload.href = project.github + "/archive/refs/heads/main.zip";
    projGoto.href = project.source;
    projGithub.href = project.github;
    projImage.src = `./images/landing pages/${project.image}`;
}
