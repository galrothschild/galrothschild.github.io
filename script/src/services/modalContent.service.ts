import { projectsModuleOne } from "../data/projects.data.js";
import { IProject } from "../models/IProject.model.js";

export function fillModalContent(dataID: string | null): void {
    if (dataID === null) throw new Error("No Data ID");
    let project: IProject = projectsModuleOne[+dataID];
    let projName = document.querySelector(".project-name") as HTMLDivElement;
    let projDesc = document.querySelector(".project-description") as HTMLParagraphElement;
    let projDownload = document.querySelector(".project-download") as HTMLAnchorElement;
    let projGoto = document.querySelector(".project-goto") as HTMLAnchorElement;
    let projGithub = document.querySelector(".project-github") as HTMLAnchorElement;
    let projImage = document.querySelector(".project-image") as HTMLImageElement;
    if (window.location.href) project.source.replace("/projects", "");

    projName.innerText = project.name;
    projDesc.innerText = project.shortDesc;
    projDownload.href = project.github + "/archive/refs/heads/main.zip";
    projGoto.href = project.source;
    projGithub.href = project.github;
    projImage.src = `./images/landing pages/${project.image}`;
}