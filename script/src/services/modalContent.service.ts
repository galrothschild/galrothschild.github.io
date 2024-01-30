import { projects } from "../data/projects.data.js";
import { IProject } from "../models/IProject.model.js";

export function fillModalContent(dataID: string | null, moduleNumber: string | null): void {
    if (dataID === null) throw new Error("No Data ID");
    if (dataID === null) throw new Error("No Module ID");
    const projectArray = projects[Number(moduleNumber)];
    let project: IProject = projectArray[+dataID];
    let projName = document.querySelector(".project-name") as HTMLDivElement;
    let projDesc = document.querySelector(".project-description") as HTMLParagraphElement;
    let projDownload = document.querySelector(".project-download") as HTMLAnchorElement;
    let projGoto = document.querySelector(".project-goto") as HTMLAnchorElement;
    let projGithub = document.querySelector(".project-github") as HTMLAnchorElement;
    let projImage = document.querySelector(".project-image") as HTMLImageElement;
    let projTechnologiesElement = document.querySelector(".project-technologies") as HTMLDivElement;
    if (window.location.href.includes("github")) {
        project.source = project.source.replace("./projects", "");
    };
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